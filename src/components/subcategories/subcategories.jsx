import React, { Component } from 'react'
import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import { getAll, update, remove, paginate } from './subcategoriesActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import ListPagination from '../../common/pagination/listPagination';

export class Subcategories extends Component {

    componentWillMount() {
        const { linesPerPage, page } = this.props;

        this.props.paginate(linesPerPage, page);
    }

    renderRow() {
        // const list = this.props.list || [];
        const list = this.props.content || [];
        return list.map(subcategory => (
            <tr key={subcategory.id}>
                <td>{subcategory.name}</td>
                <td>
                    <Link className="btn btn-warning" to={`/subcategories/${subcategory.id}/edit`}>
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger" onClick={() => this.props.remove(subcategory)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    onSetPage(page){
        console.log(this.props)
        const { linesPerPage } = this.props;
        this.props.paginate(linesPerPage, page);
    }

    render() {
        return (
            <div>
                <ContentHeader title='Subcategorias' small='listar subcategorias'/>
                <div className="col-md-12 text-right">
                    <Link className="btn btn-primary" to='/subcategories/new'>
                        <i className="fa fa-plus"></i>
                    </Link>
                </div>
                <Content>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRow()}
                        </tbody>
                    </table>

                    <ListPagination
                        totalElements={this.props.totalElements}
                        currentPage={this.props.number}
                        onSetPage={this.onSetPage.bind(this)}/>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => (
    { 
        list: state.subcategories.list,
        content: state.subcategories.content,
        last: state.subcategories.last,
        totalPages: state.subcategories.totalPages,
        totalElements: state.subcategories.totalElements,
        size: state.subcategories.size,
        number: state.subcategories.number,
        first: state.subcategories.first,
        numberOfElements: state.subcategories.numberOfElements, 
        linesPerPage: state.subcategories.linesPerPage, 
        page: state.subcategories.page, 
    });

const mapDispatchToProps = dispatch => bindActionCreators(
    { getAll, update, remove, paginate }, 
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Subcategories);
