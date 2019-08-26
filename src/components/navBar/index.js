import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { setListMovie, 
         setPicturesMovie, 
         setListSimilarMovie, 
         setYears, 
         setName,
         setSort,
         checkInFirstLoad,      } from '../../redux/listMovies/actions';

class NavBarContainer extends React.Component{
render() {
    return(
        <NavBar name = { this.props.name }
                years = { this.props.years }
                listOfMovie = { this.props.listOfMovie }
                sort = { this.props.sort }
                setListMovie = { this.props.setListMovie }
                setPicturesMovie = { this.props.setPicturesMovie }
                setListSimilarMovie = { this.props.setListSimilarMovie }
                setYears = { this.props.setYears } 
                setName = { this.props.setName }
                setSort = { this.props.setSort }
                checkInFirstLoad = { this.props.checkInFirstLoad }
                listOfPictures = { this.props.listOfPictures } />
    )
}}

const mapStateToProps = state =>{
    return {
        name: state.movieParams.name,
        years: state.movieParams.years,
        listOfMovie: state.movieParams.listOfMovie,
        sort: state.movieParams.sort,
        listOfPictures: state.movieParams.listOfPictures
    };
};
const mapDispatchToProps = {
    setListMovie,
    setPicturesMovie,
    setListSimilarMovie,
    setYears,
    setName,
    setSort,
    checkInFirstLoad,
};

export default connect( mapStateToProps, mapDispatchToProps )(NavBarContainer);