const SectionTittle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto space-y-3 my-10 w-3/12">
            <p className='text-center text-[#D99904]'>---{subHeading}---</p>
            <h1 className='text-center text-2xl border-y-4 p-2'>{heading}</h1>
        </div>
    );
};

export default SectionTittle;