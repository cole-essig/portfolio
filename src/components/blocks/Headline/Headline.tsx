import HeadlineContent from "../HeadlineContent/HeadlineContent";
import HeadlineAnima from "../HeadlineAnima/HeadlineAnima";

const Headline: React.FC = () => {
    return (
        <div className="flex flex-row w-[100vw] h-[65vh]">
            <HeadlineContent />
            <HeadlineAnima />
        </div>
    )
}

export default Headline