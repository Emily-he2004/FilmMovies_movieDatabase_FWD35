
// This file is for shared functions to use throughout the app for efficiency.
// search what you need BUT ADD: "after:(year)" to filter 
// for recent/relevant code solutions online!

function formatReleaseDate(date) {
    // convert a string that looks like:
    // 2023-11-09 and makes it look like:
    // Nov 9, 2023
    const dateObject = new Date(date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return dateObject.toLocaleDateString("en-US", options);
}

function filterVideos(videoDataArray) {
    // site: "Youtube"
    // type: "Trailer"
    return videoDataArray.filter((videoData) => {
        return videoData.site === "YouTube" && videoData.type === "Trailer"
    })
}

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
    } else {
        return text;
    }
}

function convertToHoursAndMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}Hr ${minutes}Min`;
}


export { formatReleaseDate, filterVideos, truncateText, convertToHoursAndMinutes };