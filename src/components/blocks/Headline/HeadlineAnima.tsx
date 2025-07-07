import SpinningCube from "../SpinningCube/SpinningCube";

const HeadlineAnima: React.FC = () => {
    return (
        <div className="w-[60vw] h-[60vh] absolute right-0 z-0">
            <SpinningCube />
        </div>
    )
}

export default HeadlineAnima;