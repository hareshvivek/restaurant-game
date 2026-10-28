import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GameCanvas } from './components/GameCanvas';
import { HUD } from './components/HUD';
import { InteractiveObject } from './game/interaction';
import { GameEngine } from './game/engine';
import { sounds } from './game/audio';
import { CarriedItem, StationType } from './game/cooking/types';
import { CustomerOrder } from './game/customers/types';

export const App: React.FC = () => {
  const [currentZone, setCurrentZone] = useState<string>('Dining Hall');
  const [activeTarget, setActiveTarget] = useState<InteractiveObject | null>(null);
  const [inspectedTarget, setInspectedTarget] = useState<InteractiveObject | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [carriedItem, setCarriedItem] = useState<CarriedItem | null>(null);
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [lastTip, setLastTip] = useState<number>(0);
  const [storageModal, setStorageModal] = useState<{
    isOpen: boolean;
    stationType: StationType | null;
    onSelect: (id: string) => void;
  } | null>(null);
  const [cookingToast, setCookingToast] = useState<{ message: string; icon?: string } | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  const engineRef = useRef<GameEngine | null>(null);

  const handleOrdersChange = useCallback((newOrders: CustomerOrder[]) => {
    setOrders(newOrders);
  }, []);

  const handleRevenueEarned = useCallback((amount: number, tip: number) => {
    setTotalRevenue((prev) => prev + amount + tip);
    setLastTip(tip);
    setTimeout(() => {
      setLastTip(0);
    }, 4000);
  }, []);

  const handleZoneChange = useCallback((zone: string) => {
    setCurrentZone(zone);
  }, []);

  const handleActiveTargetChange = useCallback((target: InteractiveObject | null) => {
    setActiveTarget(target);
  }, []);

  const handleTriggerInteraction = useCallback((target: InteractiveObject) => {
    setInspectedTarget(target);
  }, []);

  const handleCloseInspect = useCallback(() => {
    setInspectedTarget(null);
  }, []);

  const handleToggleMute = useCallback(() => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  }, []);

  const handleTriggerInteractViaHUD = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.triggerInteract();
    }
  }, []);

  const handleInventoryChange = useCallback((item: CarriedItem | null) => {
    setCarriedItem(item);
  }, []);

  const handleOpenStorageModal = useCallback((stationType: StationType, onSelectItem: (id: string) => void) => {
    setStorageModal({
      isOpen: true,
      stationType,
      onSelect: onSelectItem
    });
  }, []);

  const handleCloseStorageModal = useCallback(() => {
    setStorageModal(null);
  }, []);

  const handleShowCookingToast = useCallback((message: string, icon?: string) => {
    if (toastTimeoutRef.current !== null) {
      clearTimeout(toastTimeoutRef.current);
    }
    setCookingToast({ message, icon });
    toastTimeoutRef.current = window.setTimeout(() => {
      setCookingToast(null);
      toastTimeoutRef.current = null;
    }, 3200);
  }, []);

  const handleClearCarriedItem = useCallback(() => {
    if (engineRef.current) {
      engineRef.current.cookingManager.inventory.clear();
      handleShowCookingToast('Cleared item from hands.', '🧹');
    }
  }, [handleShowCookingToast]);

  // Keyboard shortcut to close inspect and storage modals with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (storageModal) setStorageModal(null);
        if (inspectedTarget) setInspectedTarget(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [inspectedTarget, storageModal]);

  return (
    <div className="game-app-container">
      <GameCanvas
        onZoneChange={handleZoneChange}
        onActiveTargetChange={handleActiveTargetChange}
        onTriggerInteraction={handleTriggerInteraction}
        onInventoryChange={handleInventoryChange}
        onOpenStorageModal={handleOpenStorageModal}
        onShowCookingToast={handleShowCookingToast}
        onOrdersChange={handleOrdersChange}
        onRevenueEarned={handleRevenueEarned}
        engineRef={engineRef}
      />
      <HUD
        currentZone={currentZone}
        activeTarget={activeTarget}
        inspectedTarget={inspectedTarget}
        carriedItem={carriedItem}
        storageModal={storageModal}
        cookingToast={cookingToast}
        orders={orders}
        totalRevenue={totalRevenue}
        lastTip={lastTip}
        onCloseInspect={handleCloseInspect}
        onCloseStorageModal={handleCloseStorageModal}
        onTriggerInteract={handleTriggerInteractViaHUD}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onClearCarriedItem={handleClearCarriedItem}
      />
    </div>
  );
};

export default App;
