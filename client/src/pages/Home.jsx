import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { CustomButton } from "../components";
import HomeCss from "../pages/Home.css?inline";
import VitaminC from "../images/VitaminC.png?inline";

import state from "../store";

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home"
          {...slideAnimation("left")}
          style={{
            backgroundImage: `url(${VitaminC})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text" style={{ color: "darkorange" }}>
                THE SECRET <br className="x-l:block" /> TO GLOWING SKIN.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white text-base">
                Unlock the power of Vitamin C and experience the transformation
                of your skin. Our Vitamin C Serum is carefully formulated to
                rejuvenate and revitalize your complexion, leaving it radiant,
                youthful, and healthy.
              </p>

              <CustomButton
                type="filled"
                title="Order Now"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
