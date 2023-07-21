"use client";

import { ShareIcon } from "@heroicons/react/24/outline";

export const ShareArticle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const handleShareAPI = async () => {
    const data = {
      title: `Veraz - ${title}`,
      text: description,
      url: window.location.href,
    };

    if (!window.navigator.canShare) {
      alert("Your browser doesn't support Web Share API");
      return window.navigator.clipboard.writeText(window.location.href);
    }

    if (window.navigator.canShare(data)) {
      try {
        await window.navigator.share(data);
      } catch (error) {
        alert("Couldn't share this article");
        return;
      }
    }
  };

  return (
    <div
      className="text-primary flex items-center space-x-1 cursor-pointer"
      onClick={handleShareAPI}
    >
      <p>Share</p>
      <ShareIcon className="h-5 w-5" />
    </div>
  );
};
