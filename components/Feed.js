import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from './../redux/actions/actions'

const mapStateToProps = state => {
    return {
        items: state.items.items
    }
}

class Feed extends Component {
    componentWillReceiveProps(nextProps) {

    }

    componentWillMount() {
        this.props.loadItems()
    }

    render() {
        return (
            <FlatList
                data={this.props.items}
                renderItem={({item}) => <Text>{item.title}</Text>}
            />
        )
    }
}

export default connect(mapStateToProps, { loadItems })(Feed);
