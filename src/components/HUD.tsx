import React, { useState } from 'react';
import { InteractiveObject } from '../game/interaction';
import { CarriedItem } from '../game/cooking/types';
import { RECIPES } from '../game/cooking/recipes';
import { CustomerOrder } from '../game/customers/types';

interface HUDProps {
  currentZone: string;
  activeTarget: InteractiveObject | null;
  inspectedTarget: InteractiveObject | null;
  carriedItem: CarriedItem | null;
  storageModal: unknown;
  cookingToast: { message: string; icon?: string } | null;
  orders: CustomerOrder[];
  totalRevenue: number;
  lastTip: number;
  onCloseInspect: () => void;
  onCloseStorageModal: () => void;
  onTriggerInteract: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onClearCarriedItem: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  activeTarget,
  carriedItem,
  cookingToast,
  orders,
  totalRevenue,
  lastTip,
  onTriggerInteract,
  isMuted,
  onToggleMute,
  onClearCarriedItem
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(true);

  return (
    <div className="hud-layer">
      {/* Toast Notification Banner */}
      {cookingToast && (
        <div className="hud-toast animate-toast">
          <span className="toast-icon">{cookingToast.icon || '👨‍🍳'}</span>
          <span className="toast-text">{cookingToast.message}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="hud-header">
        <div className="header-left">
          {/* Bistro Deluxe Crest */}
          <div className="brand-badge">
            <span className="brand-crest">🍽️</span>
            <div className="brand-titles">
              <span className="brand-name">Bistro Deluxe</span>
              <span className="brand-tagline">Restaurant Service</span>
            </div>
          </div>

          {/* Revenue & Tip Counter */}
          <div className="revenue-card">
            <span className="revenue-icon">🪙</span>
            <span className="revenue-val">${totalRevenue}</span>
            {lastTip > 0 && <span className="tip-bubble">+${lastTip} tip!</span>}
          </div>
        </div>

        {/* Top Right Utilities */}
        <div className="header-right">
          <button
            className="hud-pill-btn"
            onClick={() => setShowMenu(true)}
            title="View Restaurant Dishes & Prices"
          >
            📋 Menu
          </button>
          <button
            className="hud-pill-btn"
            onClick={() => setShowControls(true)}
            title="How to Play"
          >
            ❓ Guide
          </button>
          <button
            className="hud-circle-btn"
            onClick={onToggleMute}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            aria-label="Toggle Mute"
          >
            {isMuted ? '🔇' : '🔔'}
          </button>
        </div>
      </header>

      {/* Compact Orders & Task Drawer (Left Side) */}
      <aside className="orders-sidebar">
        <div
          className="orders-toggle-tab"
          onClick={() => setIsOrdersOpen(!isOrdersOpen)}
          role="button"
          tabIndex={0}
        >
          <div className="orders-tab-info">
            <span className="orders-tab-title">📋 Orders</span>
            <span className="orders-count-badge">{orders.length}</span>
          </div>
          <span className="orders-chevron">{isOrdersOpen ? '▲' : '▼'}</span>
        </div>

        {isOrdersOpen && (
          <div className="orders-list-scroll">
            {orders.length === 0 ? (
              <div className="orders-empty-state">
                <span>All caught up! Waiting for guests to arrive...</span>
              </div>
            ) : (
              orders.map((ord) => {
                const patiencePct = Math.max(0, Math.min(100, ord.patience));
                let barColor = '#2ecc71';
                if (patiencePct < 30) barColor = '#e74c3c';
                else if (patiencePct < 60) barColor = '#f39c12';

                return (
                  <div key={ord.id} className="order-ticket">
                    <div className="order-ticket-top">
                      <span className="order-location">
                        {ord.type === 'takeaway' ? '🥡' : '🍽️'} {ord.targetLocationName}
                      </span>
                      <span className="order-customer-name">{ord.customerName}</span>
                    </div>

                    <div className="order-ticket-dish">
                      <div className="order-dish-name-row">
                        <span className="order-dish-icon">{ord.dishIcon}</span>
                        <span className="order-dish-name">{ord.dishName}</span>
                      </div>
                      <span className="order-dish-price">${ord.price}</span>
                    </div>

                    <div className="order-ticket-footer">
                      <span
                        className={`order-status-pill status-${ord.status.toLowerCase().replace(/_/g, '-')}`}
                      >
                        {ord.status === 'THINKING' && 'Reading Menu...'}
                        {ord.status === 'WAITING_TO_BE_TAKEN' && 'Take Order [E]'}
                        {ord.status === 'PREPARING' && '👨‍🍳 Chefs Cooking'}
                        {ord.status === 'READY_TO_SERVE' && '🛎️ Ready at Pickup!'}
                        {ord.status === 'EATING' && 'Dining 😋'}
                        {ord.status === 'COMPLETED' && 'Paid & Happy ✨'}
                        {ord.status === 'CANCELLED' && 'Cancelled'}
                      </span>

                      {(ord.status === 'WAITING_TO_BE_TAKEN' ||
                        ord.status === 'PREPARING' ||
                        ord.status === 'READY_TO_SERVE') && (
                        <div className="order-timer-group">
                          <div className="patience-track">
                            <div
                              className="patience-fill"
                              style={{ width: `${patiencePct}%`, backgroundColor: barColor }}
                            />
                          </div>
                          <span className="patience-secs">
                            {Math.ceil(ord.patienceRemainingSec)}s
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </aside>

      {/* Floating Contextual Interaction Prompt (Only when player is near actionable target) */}
      {activeTarget && (
        <div
          className="context-prompt animate-prompt-glow"
          onClick={onTriggerInteract}
          role="button"
          tabIndex={0}
        >
          <div className="prompt-key-badge">E</div>
          <span className="prompt-action-text">{activeTarget.actionLabel}</span>
        </div>
      )}

      {/* Bottom Center: Carried Food Platter Tray (Only when player is holding a dish) */}
      {carriedItem && (
        <div className="carried-food-bar animate-slide-up">
          <div className="carried-food-content">
            <span className="carried-food-icon">{carriedItem.icon}</span>
            <div className="carried-food-info">
              <span className="carried-food-title">Holding: {carriedItem.name}</span>
              <span className="carried-food-sub">
                👉 Deliver to: {carriedItem.targetLocationName || 'Customer'}
              </span>
            </div>
          </div>
          <button
            className="carried-clear-btn"
            onClick={onClearCarriedItem}
            title="Clear hands"
          >
            ✕ Put Down
          </button>
        </div>
      )}

      {/* Menu Modal */}
      {showMenu && (
        <div className="modal-overlay" onClick={() => setShowMenu(false)}>
          <div className="menu-card" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <span className="menu-crest">✦</span>
              <h2 className="menu-title">Bistro Deluxe Menu</h2>
              <p className="menu-subtitle">Prepared fresh by Chefs Marco & Antoine</p>
              <button className="modal-close-btn" onClick={() => setShowMenu(false)}>
                ✕
              </button>
            </div>

            <div className="menu-items-grid">
              {Object.values(RECIPES).map((rec) => (
                <div key={rec.id} className="menu-dish-item">
                  <div className="menu-dish-icon-box">{rec.icon}</div>
                  <div className="menu-dish-details">
                    <div className="menu-dish-header">
                      <h3 className="menu-dish-name">{rec.name}</h3>
                      <span className="menu-dish-price">
                        ${rec.id === 'pizza' ? 28 : rec.id === 'burger' ? 22 : rec.id === 'pasta' ? 24 : rec.id === 'sandwich' ? 18 : 20}
                      </span>
                    </div>
                    <p className="menu-dish-desc">{rec.description}</p>
                    <div className="menu-station-tag">
                      🍳 Station:{' '}
                      {rec.category === 'pizza'
                        ? 'Stone Pizza Oven'
                        : rec.category === 'burger' || rec.category === 'pasta'
                        ? 'Stovetop Range & Grill'
                        : rec.category === 'fried_chicken'
                        ? 'Deep Fryer'
                        : 'Prep Board'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="menu-footer">
              <button className="primary-modal-btn" onClick={() => setShowMenu(false)}>
                Back to Restaurant
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gameplay & Controls Guide Modal */}
      {showControls && (
        <div className="modal-overlay" onClick={() => setShowControls(false)}>
          <div className="guide-card" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <span className="menu-crest">✦</span>
              <h2 className="menu-title">Restaurant Service Guide</h2>
              <p className="menu-subtitle">How to run Bistro Deluxe</p>
              <button className="modal-close-btn" onClick={() => setShowControls(false)}>
                ✕
              </button>
            </div>

            <div className="guide-content">
              <div className="guide-step">
                <span className="step-num">1</span>
                <div>
                  <strong>Greet & Take Orders</strong>
                  <p>When guests sit down at tables, wait for them to read the menu, then press <code>[E]</code> to take their order.</p>
                </div>
              </div>

              <div className="guide-step">
                <span className="step-num">2</span>
                <div>
                  <strong>Autonomous Chefs Cook</strong>
                  <p>Chefs Marco and Antoine automatically assemble recipes, cook them at the oven, stove, or fryer, and plate them at the <strong>Order Pickup Counter</strong>.</p>
                </div>
              </div>

              <div className="guide-step">
                <span className="step-num">3</span>
                <div>
                  <strong>Pick Up & Serve Hot Food</strong>
                  <p>Walk to the Pickup Counter and press <code>[E]</code> to collect ready meals, then deliver them to the designated table or takeaway guest.</p>
                </div>
              </div>

              <div className="guide-step">
                <span className="step-num">4</span>
                <div>
                  <strong>Collect Tips & Clean Tables</strong>
                  <p>Guests pay generous tips when food is served promptly. After they leave, press <code>[E]</code> at dirty tables to clean them for new patrons!</p>
                </div>
              </div>
            </div>

            <div className="guide-controls-row">
              <div className="kb-hint">
                <span className="key-cap">W</span>
                <span className="key-cap">A</span>
                <span className="key-cap">S</span>
                <span className="key-cap">D</span>
                <span>or Arrow Keys to Move</span>
              </div>
              <div className="kb-hint">
                <span className="key-cap">E</span>
                <span>Interact / Take Order / Pick up / Serve / Clean</span>
              </div>
            </div>

            <div className="menu-footer">
              <button className="primary-modal-btn" onClick={() => setShowControls(false)}>
                Got it, Let's Serve!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HUD;
