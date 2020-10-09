import React from "react";
import Button from "../Button";
export const Component = () => {
  return (
    <aside>
      <Button emoji="➕" ariaLabel="Emoji of plus sign" />
      <Button emoji="📆" ariaLabel="Emoji of calendar entry" />
      <Button emoji="⏰" ariaLabel="Emoji of desk clock alarm" />
      <Button emoji="🛒" ariaLabel="Emoji of shopping cart" />
      <Button emoji="📧" ariaLabel="Emoji of letter" />
      <Button emoji="☔" ariaLabel="Emoji of umbrella" />
      <Button emoji="🔢" ariaLabel="Emoji of numbers 1 to 4" />
    </aside>
  );
};
