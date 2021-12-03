import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import classNames from "classnames";

// ICONS
import ChevronDownIcon from "components/icons/ChevronDownIcon";

const CustomAccordion = ({ accordionItems, expandedPanel = false }) => {
  const [expanded, setExpanded] = useState(expandedPanel);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="fy-accordion">
      {accordionItems.length > 0 &&
        accordionItems.map((item, idx) => {
          const accordionClasses = classNames({
            "fy-accordion__transparent": expanded !== `panel-${idx}`,
          });
          const titleClasses = classNames({
            "pink-title": expanded === `panel-${idx}`,
          });
          return (
            <Accordion
              key={item.id || idx}
              expanded={expanded === `panel-${idx}`}
              onChange={handleChange(`panel-${idx}`)}
              className={accordionClasses}>
              <AccordionSummary
                expandIcon={<ChevronDownIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography className={titleClasses}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>{item.component}</AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};

export default CustomAccordion;
