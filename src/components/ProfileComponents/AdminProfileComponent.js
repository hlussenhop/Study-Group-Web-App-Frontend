import React from "react";
import {Link} from "react-router-dom";
import FollowList from "./FollowList";
import RecentPostListComponent from "./RecentPostListComponent";
import UserService from "../../services/UserService"
import PendingRequestsComponent from "./PendingRequestsComponent";

class AdminProfileComponent extends React.Component{

    pendingRequest = {
        // user: 'calbee',
        id: 992199446,
        date: 'June 18, 2020'
    }

    state = {
        bio: 'Hello! I want to join study groups.',
        location: 'San Diego',
        followers: [this.user, this.user],
        following: [this.user, this.user, this.user],
        courseList: [this.course, this.course],
        pendingRequests: [this.pendingRequest, this.pendingRequest, this.pendingRequest],
        recentPosts: this.props.recentPosts,
        studyGroups: this.props.studyGroups,
        currentUser: this.props.currentUser
    }

    render() {
        return (
            <div>
                {
                    !this.props.visiting &&
                    <Link to={`/${this.state.currentUser.id}/editProfile`}>
                        <button className="btn login_btn">
                            Edit
                        </button>
                    </Link>
                }

                <div>
                    <h2 className="d-flex justify-content-center">
                        {this.state.currentUser.firstName} {this.state.currentUser.lastName}
                    </h2>
                    <p className="d-flex justify-content-center">{this.state.location}</p>
                    <h5 className="d-flex justify-content-center">{this.state.bio}</h5>
                    <h3>Welcome {this.state.currentUser.username}</h3>

                </div>


                <div className="profile">


                    {/*<div className="row">*/}
                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Following</h5>*/}
                    {/*        <FollowList list={this.state.followers}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Followers</h5>*/}
                    {/*        <FollowList list={this.state.following}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-4">*/}
                    {/*        <h5 className="profile-heading">Courses</h5>*/}
                    {/*        <FollowList list={this.state.courseList}/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h5 className="profile-heading">Pending Requests to Study Group: {this.studyGroup.name}</h5>*/}
                    {/*    <PendingRequestsComponent list={this.state.pendingRequests}/>*/}
                    {/*</div>*/}
                    <div>
                        <h5 className="profile-heading">Study Groups:</h5>
                        <FollowList list={this.state.studyGroups}/>
                    </div>
                    <br/>
                    <div>
                        <h5 className="profile-heading">Recent Posts:</h5>
                        <RecentPostListComponent list={this.state.recentPosts}/>
                    </div>


                </div>
            </div>


        )
    }

}

export default AdminProfileComponent