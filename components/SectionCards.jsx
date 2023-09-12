import Card from "./card";

const SectionCards = (props) => {
    const { title } = props;

    return (
        <section className="text-blue20 bg-black50 px-4">
            <h2 className="text-white10 font-bold text-4xl">
                {title}
            </h2>
            <div className="flex pt-7 pb-6 mt-6 mr-3 overflow-x-scroll overflow-y-hidden ">
                <Card imgUrl="/images/Kingdom.png" size="large" />
                <Card imgUrl="/images/Kingdom.png" size="large" />
                <Card imgUrl="/images/Kingdom.png" size="large" />
                <Card imgUrl="/images/Kingdom.png" size="large" />
                <Card imgUrl="/images/Kingdom.png" size="large" />
                <Card imgUrl="/images/Kingdom.png" size="large" />
            </div>
        </section>
    );
}

export default SectionCards;