import Card from "./card";

const SectionCards = (props) => {
    const { title } = props;

    return (
        <section className="px-4 text-blue20 bg-black50">
            <h2 className="text-4xl font-bold text-white10">
                {title}
            </h2>
            <div className="flex pb-6 mt-6 mr-3 overflow-x-scroll overflow-y-hidden pt-7 ">
                <Card imgUrl="https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80" size="large" />
                <Card imgUrl="https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80" size="large" />
                <Card imgUrl="https://images.unsplash.com/photo-1634157703702-3c124b455499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80" size="large" />
            </div>
        </section>
    );
}

export default SectionCards;