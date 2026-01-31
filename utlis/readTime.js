// Calculate estimated read time for blog content
// Average reading speed: 200-250 words per minute, we'll use 200 for conservative estimate
export function calculateReadTime(blog) {
  if (!blog || !blog.content) return 1; // Default to 1 min if no content

  let totalWords = 0;

  // Count words in intro
  if (blog.content.intro) {
    totalWords += blog.content.intro.split(/\s+/).length;
  }

  // Count words in all sections
  if (blog.content.sections && Array.isArray(blog.content.sections)) {
    blog.content.sections.forEach((section) => {
      if (section.text) {
        totalWords += section.text.split(/\s+/).length;
      }
      if (section.title) {
        totalWords += section.title.split(/\s+/).length;
      }
    });
  }

  // Count words in description as backup
  if (!totalWords && blog.description) {
    totalWords = blog.description.split(/\s+/).length;
  }

  // Calculate read time (200 words per minute)
  const readTime = Math.ceil(totalWords / 200);

  // Return minimum 1 minute
  return readTime < 1 ? 1 : readTime;
}

// Format read time for display
export function formatReadTime(minutes) {
  return `${minutes} min read`;
}
