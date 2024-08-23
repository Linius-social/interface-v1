"use client";

import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

export type ProfileAccordionProps = {
  address: string;
  name: string;
  avatarUrl?: string;
};

const ProfileAccordion = ({
  name,
  address,
  avatarUrl,
}: ProfileAccordionProps) => {
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label={name}
        startContent={<Avatar isBordered showFallback src={avatarUrl} />}
        subtitle={address}
        title={name}
      >
        <div>Price: hehe</div>
      </AccordionItem>
    </Accordion>
  );
};

export default ProfileAccordion;
