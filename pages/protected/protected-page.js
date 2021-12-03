import React from "react";

// EFFECTS
import useAuthSession from "effects/useAuthSession.effect";

const ProtectedPage = () => {
  const authToken = useAuthSession();

  // if (!authToken) return null;
  return (
    <div>
      <span>You are authenticated as: {authToken}</span>
    </div>
  );
};

export default ProtectedPage;
