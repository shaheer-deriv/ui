import type { Meta, StoryObj } from "@storybook/react";
import { SideNote } from "../../lib/main";

const meta = {
    title: "Components/SideNote",
    component: SideNote,
    args: {
        title: "This is a test title",
        titleSize: "sm",
        className: "",
        actionLabel: "Learn more",
        actionClick: () => console.log("Test action"),
        actionClassName: "",
    },
    argTypes: {
        title: { control: false, description: "Display the title content." },
        titleSize: { description: "Set the font-size for the title." },
        className: {
            control: false,
            description: "Add an extra className to the container.",
        },
        actionLabel: {
            control: false,
            description: "Display the label of the action.",
        },
        actionClick: {
            control: false,
            description: "An onclick handler for the action button.",
        },
        actionClassName: {
            control: false,
            description: "Add an extra className to the action button.",
        },
    },
    parameters: { layout: "centered" },
    tags: ["autodocs"],
} satisfies Meta<typeof SideNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "SideNote",
    render: () => (
        <div style={{ width: "300px" }}>
            <SideNote
                title="Test title"
                actionLabel="Learn more"
                actionClick={() => console.log("test click!")}
            >
                <p style={{ margin: "10px 0" }}>This is a test note</p>
            </SideNote>
        </div>
    ),
};
