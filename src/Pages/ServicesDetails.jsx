import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import services from '../Assets/img/services.jpg'

function ServicesDetails() {
    return (
        <>
            <div class="breadcrumbs d-flex align-items-center">
                <Navbar />
                <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                    <h2>Service Details</h2>
                    <ol>
                        <li><a style={{ textDecoration: 'none' }} href="/">Home</a></li>
                        <li>Service Details</li>
                    </ol>
                </div>
            </div>
            <section id="service-details" class="service-details">
                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <div class="row gy-4">

                        <div class="col-lg-4">
                            <div class="services-list">
                                <a style={{textDecoration: 'none'}} href="/#" class="active">Remodeling</a>
                                <a style={{textDecoration: 'none'}} href="/#">Construction</a>
                                <a style={{textDecoration: 'none'}} href="/#">Product Management</a>
                                <a style={{textDecoration: 'none'}} href="/#">Repairs</a>
                                <a style={{textDecoration: 'none'}} href="/#">Design</a>
                            </div>

                            <h4>Enim qui eos rerum in delectus</h4>
                            <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.</p>
                        </div>

                        <div class="col-lg-8">
                            <img src={services} alt="" class="img-fluid services-img" />
                                <h3>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h3>
                                <p>
                                    Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.
                                </p>
                                <ul>
                                    <li><i class="fa-regular fa-circle-check"></i> <span>Aut eum totam accusantium voluptatem.</span></li>
                                    <li><i class="fa-regular fa-circle-check"></i> <span>Assumenda et porro nisi nihil nesciunt voluptatibus.</span></li>
                                    <li><i class="fa-regular fa-circle-check"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span></li>
                                </ul>
                                <p>
                                    Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.
                                </p>
                                <p>
                                    Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum. Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae ipsum at consequatur vero. Architecto ut pariatur autem ad non cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias explicabo ea.
                                </p>
                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )


}
export default ServicesDetails; 