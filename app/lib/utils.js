export function extractYouTubeVideoId(url) {
  // Regular expression to match YouTube video ID
  var regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

  // Executing the regular expression on the URL
  var match = url?.match(regExp)

  // If a match is found, return the video ID, otherwise return null
  return match ? match[1] : null
}
