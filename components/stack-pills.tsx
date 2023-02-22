import {AttributeCollection, Stack} from '../types';

interface StackPillsProps {
    stacks: AttributeCollection<Stack>;
    containerClassName?: string;
}

const StackPills = ({stacks, containerClassName}: StackPillsProps) => {

    return (
        <div className={`${containerClassName} flex flex-wrap`}>
            {stacks.data.map((stack, id) => (
                <button key={id} className=" mr-3 mb-3 w-fit whitespace-nowrap rounded-full  bg-[#484848] px-[12px] py-[8px] leading-5 text-white hover:bg-[#4f4f4f] md:ml-0">
                    {stack.attributes.title}
                </button>
            ))}
        </div>
    )
}

export {StackPills};