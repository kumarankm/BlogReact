import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../parts/Breadcrumb';
import Post from '../parts/Post';
import Sidebar from '../parts/Sidebar';
import Footer from '../parts/Footer';

const Category = () => {
    return(
        <>
        <Header />
        <Breadcrumb />
        <section className="blog-section">
			<div className="container">
				<div className="row">
                    <Post />
                    <Sidebar />
					
					
				</div>
			</div>
		</section>

        <Footer />
        </>
    );
};

export default Category;