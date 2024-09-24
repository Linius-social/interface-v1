import dynamic from "next/dynamic";
import React from "react";
import Area from "./Area";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
}
function Project(props: ProjectProps) {
    return (
        <Area title="Project">
            <form action="" className="flex flex-row items-center justify-center gap-4">
                <Input
                    color="primary"
                    variant="flat"
                    type="text"
                    placeholder="Name"
                    classNames={{
                        inputWrapper: "bg-primary-800"
                    }}
                    fullWidth
                />
                <Select placeholder="Address" fullWidth>
                    <SelectItem key={"example"} value="1">Type 1</SelectItem>
                </Select>
            </form>
        </Area>
    );
}

export default dynamic(() => Promise.resolve(Project));