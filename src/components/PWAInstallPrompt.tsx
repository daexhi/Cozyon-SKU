import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, X, Share } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showPrompt, setShowPrompt] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    // Show prompt if installable and not already installed, after a short delay
    if ((isInstallable || isIOS) && !isInstalled) {
      const timer = setTimeout(() => setShowPrompt(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isInstallable, isIOS, isInstalled]);

  if (isInstalled) return null;

  const handleInstall = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) setShowPrompt(false);
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-6 md:w-96"
          >
            <div className="bg-slate-900 text-white p-5 rounded-3xl shadow-2xl border border-slate-800 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <img src="/icon.svg" alt="Cozyon Logo" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Install Cozyon SKU</h3>
                    <p className="text-slate-400 text-sm leading-tight">
                      Akses katalog SKU lebih cepat langsung dari layar utama ponsel Anda.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPrompt(false)}
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <button
                onClick={handleInstall}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
              >
                <Download size={18} />
                {isIOS ? 'Install di iOS' : 'Install Sekarang'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIOSGuide && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full text-slate-900 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />
              <button 
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center shadow-inner">
                  <img src="/icon.svg" alt="Cozyon Logo" className="w-12 h-12" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-black mb-2">Install di iPhone</h3>
                  <p className="text-slate-600">Ikuti langkah mudah ini untuk menambahkan ke layar utama:</p>
                </div>

                <div className="w-full space-y-4 text-left">
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">1</div>
                    <p className="text-sm font-medium">Klik tombol <span className="inline-block p-1 bg-white border border-slate-200 rounded-md"><Share size={14} className="text-blue-600" /></span> di bagian bawah Safari.</p>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">2</div>
                    <p className="text-sm font-medium">Scroll ke bawah dan pilih <br /><span className="font-bold text-blue-600">"Add to Home Screen"</span>.</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg active:scale-95 transition-transform"
                >
                  Dimengerti
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
