const Animation: React.FC = () => {
  return (
    <>
      <div className="w-full mx-auto h-full">
        <video
          className="w-full h-full object-cover rounded-[12px] z-5"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="src/assets/Video/mail_animation.webm"
            type="video/webm"
          />
        </video>
      </div>
    </>
  );
};

export default Animation;
