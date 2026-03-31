"use client";

import { DriiinkProvider, useDriiink } from "@/lib/driiink/driiink-context";
import PhoneFrame from "./PhoneFrame";
import BottomNav from "./ui/BottomNav";
import DriiinkBackButton from "./ui/BackButton";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { AnimatePresence, motion } from "motion/react";

function ScreenRouter() {
  const { state } = useDriiink();

  const screens = {
    home: <HomeScreen />,
    detail: <DetailScreen />,
    order: <OrderScreen />,
    payment: <PaymentScreen />,
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0A0A0A]">
      <AnimatePresence mode="wait">
        <motion.div
          key={state.screen}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 overflow-y-auto overflow-x-hidden"
        >
          {screens[state.screen]}
        </motion.div>
      </AnimatePresence>

      {(state.screen === "home" || state.screen === "order") && <BottomNav />}
    </div>
  );
}

export default function DriiinkApp() {
  return (
    <DriiinkProvider>
      <PhoneFrame>
        <ScreenRouter />
      </PhoneFrame>
      <DriiinkBackButton />
    </DriiinkProvider>
  );
}
