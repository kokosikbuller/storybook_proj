import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export type ToastProps = {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  show: boolean;
};

export const Toast = ({ message, type = 'info', duration = 3000, onClose, show,}: ToastProps) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={clsx(
              'px-4 py-3 rounded shadow-lg text-white flex items-center justify-between gap-4',
              {
                'bg-green-500': type === 'success',
                'bg-red-500': type === 'error',
                'bg-blue-500': type === 'info',
                'bg-yellow-400': type === 'warning',
              }
            )}
          >
            <span>{message}</span>
            {onClose && (
              <button
                onClick={onClose}
                className="ml-4 font-bold text-white cursor-pointer"
              >
                x
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};