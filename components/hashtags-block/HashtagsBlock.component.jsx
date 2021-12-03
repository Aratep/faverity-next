import React from "react";
import classNames from "classnames";

// BASE COMPONENTS
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import IsVisible from "components/is-visible/IsVisible.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// UTILITIES
import { isObjectEmpty } from "utilities/helper-functions";

const HashtagsBlock = ({
  categories,
  params,
  label,
  isLoading,
  onParamChange,
  isMultiple = true,
}) => {
  const { dispatch } = useToolkit();

  const selectHashtags = (id) => {
    let ids = params.categories.slice(0);

    // if id already exists remove from list
    if (ids.includes(id)) {
      ids = ids.filter((i) => i !== id);
    } else {
      // otherwise put into list
      if (isMultiple) {
        ids.push(id);
      } else {
        ids = [id];
      }
    }
    dispatch(onParamChange("categories", ids));
  };

  return (
    <div>
      <LoaderWrapper isLoading={isLoading}>
        <div className="hashtags-container">
          <IsVisible isVisible={label}>
            <div className="hashtags-container__label">{label}</div>
          </IsVisible>
          <div className="hashtags-block">
            {categories &&
              categories.map((category) => {
                const hashtagClasses = classNames({
                  "hashtags-block__item": true,
                  "hashtags-block__selected-item":
                    !isObjectEmpty(params) &&
                    params.categories.includes(category.id),
                });
                return (
                  <span
                    onClick={() => selectHashtags(category.id)}
                    className={hashtagClasses}
                    key={category?.id}>
                    {category?.name}
                  </span>
                );
              })}
          </div>
        </div>
      </LoaderWrapper>
    </div>
  );
};

export default HashtagsBlock;
