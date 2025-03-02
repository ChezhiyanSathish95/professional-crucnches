import React from 'react';
import BlogWithSidebarData from '../../jsonData/BlogWithSidebarData.json'
import SingleBlogSideBar from './SingleBlogSideBar';
import Pagination from '../others/Pagination';
import SearchWidget from '../widgets/SearchWidget';
import RecentPostWidget from '../widgets/RecentPostWidget';
import CategoryDataListWidget from '../widgets/CategoryDataListWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import ArchivesWidget from '../widgets/ArchivesWidget';
import SocialWidget from '../widgets/SocialWidget';
import TagsWidget from '../widgets/TagsWidget';

const BlogWithSideBarContent = () => {
    return (
        <>
            <div className="blog-area full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {BlogWithSidebarData.map(blog =>
                                        <SingleBlogSideBar blog={blog} key={blog.id} />
                                    )}
                                </div>
                                <Pagination />
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostWidget />
                                    <CategoryDataListWidget />
                                    <GalleryWidget />
                                    <ArchivesWidget />
                                    <SocialWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogWithSideBarContent;