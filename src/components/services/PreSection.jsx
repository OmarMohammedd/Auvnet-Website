import { motion } from "framer-motion";
import {
  preServices,
  preServicesone,
  preServicesonedash,
} from "../../utils/motion";
import { useTranslation } from "react-i18next";
function PreSection({ num, stroke, type, txt }) {
  return (
    <div className="services  pre-services">
      <div className="overlay"></div>
      <div className="main-container">
        <div className="services_left">
          {type === "last-section" ? (
            <motion.h1
              className={`${stroke && "stroke-pre-servive"}`}
              variants={preServicesonedash("up", 0.35, 0.75)}
              initial="hidden"
              whileInView="show"
            >
              <motion.h1
                className={`${stroke && "stroke-pre-servive"}`}
                variants={preServicesone("up", 0, 0.35)}
                initial="hidden"
                whileInView="show"
              >
                {num}
                {txt}
              </motion.h1>
            </motion.h1>
          ) : (
            <motion.h1
              className={`${stroke && "stroke-pre-servive"}`}
              variants={preServices("up", "", 0, 0.75)}
              initial="hidden"
              whileInView="show"
            >
              {num}
              {txt}
            </motion.h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default PreSection;
