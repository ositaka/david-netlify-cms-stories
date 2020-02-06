import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
	// nuno
	const data = entry.getIn(['data']).toJS()

	const tags = entry.getIn(['data', 'tags'])
	return (
		<BlogPostTemplate
			content={widgetFor('body')}
			description={entry.getIn(['data', 'description'])}
			tags={tags && tags.toJS()}
			title={entry.getIn(['data', 'title'])}
			gallerySwiper={data.gallery || { images: [] }}
		/>
	)
}

BlogPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func,

	// test - maybe not needed
	gallery: PropTypes.shape({
		images: PropTypes.array
	})
}

export default BlogPostPreview
