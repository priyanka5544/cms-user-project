import React, { Component } from 'react'

export default class FeaturedCourses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [
                {
                    img: "https://i.pinimg.com/originals/8f/ad/12/8fad125b8f6082bdb7deb0aa593dfb49.jpg",
                    title: "Python",
                    para: "Python is a straightforward to be told,powerful programmng language.It's efficient high-level knowledge structures and an easy however..."
                },
                {
                    img: "https://i.pinimg.com/originals/e9/94/61/e99461fdd5b3db8bdb3081d8acf5e524.png",
                    title: "Java",
                    para: "provides an insight into the development of windows and web-bsed and applcations.With the increased use of the Internet and advances in information..."
                },
                {
                    img: "https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/8a997691-8bf1-4258-9b29-795bf5ddd085/Image/7e869e0f81db34c1a99a7906a2fe8cae/php_mysql.png",
                    title: "PHP & Mysql",
                    para: "PHP is a general-purpose scripting language especially suited to web development.It is used to manage dynamic content, databases, session token..."
                },
                {
                    img: "http://www.chicagocomputerclasses.com/wp-content/uploads/2014/04/html5-css31.png",
                    title: "HTML & CSS",
                    para: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser..."
                }
            ]
        }
    }

    render() {
        return (
            <div className="feature_course">
                <div className="container">
                    <h1 className="text-center"> Featured Courses</h1>
                    <p className="text-center">E-Learners No.1 Programming Institute with providing training more than 10
                <br /> languages</p>

                    <div className="row">
                        {this.state.courses.map((courses) => {
                            return (
                                <div className="col-md-3 col-sm-3 py-3 py-sm-3">
                                    <div className="card">
                                        <img className="card-img-top" src={courses.img} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{courses.title}</h5>
                                            <p className="card-text text-center">{courses.para}</p>
                                            <a href="#" className="btn"> Read More..</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        )
    }
}
