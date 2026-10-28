import React, { useEffect, useRef, useState } from 'react';
import { GameEngine } from '../game/engine';
import { InteractiveObject } from '../game/interaction';
import { CarriedItem, StationType } from '../game/cooking/types';
import { CustomerOrder } from '../game/customers/types';

interface GameCanvasProps {
  onZoneChange: (zone: string) => void;
  onActiveTargetChange: (target: InteractiveObject | null) => void;
  onTriggerInteraction: (target: InteractiveObject) => void;
  onInventoryChange: (item: CarriedItem | null) => void;
  onOpenStorageModal: (stationType: StationType, onSelectItem: (id: string) => void) => void;
  onShowCookingToast: (message: string, icon?: string) => void;
  onOrdersChange: (orders: CustomerOrder[]) => void;
  onRevenueEarned: (amount: number, tip: number) => void;
  engineRef: React.MutableRefObject<GameEngine | null>;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  onZoneChange,
  onActiveTargetChange,
  onTriggerInteraction,
  onInventoryChange,
  onOpenStorageModal,
  onShowCookingToast,
  onOrdersChange,
  onRevenueEarned,
  engineRef
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let engine: GameEngine | null = null;
    try {
      engine = new GameEngine(mountRef.current, {
        onZoneChange,
        onActiveTargetChange,
        onTriggerInteraction,
        onInventoryChange,
        onOpenStorageModal,
        onShowCookingToast,
        onOrdersChange,
        onRevenueEarned
      });

      engineRef.current = engine;
      engine.start();
    } catch (err: unknown) {
      console.error('Failed to initialize GameEngine:', err);
      setErrorMsg((err as Error)?.message || 'Failed to initialize 3D graphics');
    }

    return () => {
      if (engine) {
        engine.destroy();
      }
      engineRef.current = null;
    };
  }, [
    onZoneChange,
    onActiveTargetChange,
    onTriggerInteraction,
    onInventoryChange,
    onOpenStorageModal,
    onShowCookingToast,
    onOrdersChange,
    onRevenueEarned,
    engineRef
  ]);

  if (errorMsg) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fbf7ee',
          background: '#121315',
          fontFamily: 'sans-serif',
          padding: '24px',
          textAlign: 'center'
        }}
      >
        <h2 style={{ color: '#ef4444', marginBottom: '12px' }}>Graphics Initialization Error</h2>
        <p style={{ maxWidth: '480px', color: '#ede4d3', marginBottom: '20px' }}>{errorMsg}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 24px',
            background: '#8b2536',
            color: '#fff',
            border: '1px solid #d4af37',
            borderRadius: '9999px',
            cursor: 'pointer',
            fontWeight: 700
          }}
        >
          Reload Bistro Deluxe
        </button>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      id="game-canvas-container"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }}
    />
  );
};
