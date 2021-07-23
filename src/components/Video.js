function Video({video}) {
    return (
        <>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameborder="0"
                allowfullscreen
                title={video.title}
            />
        </>
    )
}

export default Video