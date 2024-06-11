import fs from 'fs';
import matter from 'gray-matter';

export function getBlogMetadata(baseDir: string) {
    const folder = baseDir + '/';
    const files = fs.readdirSync(folder);
    const markdownBlogs = files.filter((file) => file.endsWith('.md'));

    const blogs = markdownBlogs.map((md) => {
        const fileContents = fs.readFileSync(`${baseDir}/${md}`, 'utf-8');
        const matterResult = matter(fileContents);
		const formattedDate = new Date(matterResult.data.date);

        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            slug: md.replace('.md', ''),
			date: formattedDate,
        };
    });

	return blogs
}
