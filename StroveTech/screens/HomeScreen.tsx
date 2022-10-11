import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import MovieItem from '../components/movieList';
import { connect } from 'react-redux';
import { getDogs } from '../state/Actions';
import { useSelector, useDispatch } from 'react-redux';

export type Props = {
  navigation: Function,
  getDogs: Function,
  dogs: any,
  loading: boolean
};

const HomeScreen: React.FC<Props> = ({
  navigation,
  dogs,
  loading,
  getDogs
}) => {
  // const { dogs, loading } = useSelector((state: { dogsReducer: any; }) => state.dogsReducer);
  const dispatch = useDispatch();
  const fetch = () => dispatch(getDogs());
  useEffect(() => {
    fetch();

    //dispatch(getDogs());
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={dogs}
          renderItem={({ item }) => (
            <MovieItem
              dogId={item.key}
              dogImage={item.imageUrl}
              color={item.color}
              description={item.description}
              dogName={item.name}
              breed={item.breed}
              navigation={navigation}
            />
          )}
          keyExtractor={item => item.key}
        />
      )}
    </View>
  );
};

// This function provides a means of sending actions so that data in the Redux store
// can be modified. In this example, calling this.props.addToCounter() will now dispatch
// (send) an action so that the reducer can update the Redux state.
function mapDispatchToProps(dispatch: (arg0: (dispatch: any) => Promise<void>) => any) {
  return {
    getDogs: () => dispatch(getDogs()),
  };
}

// This function provides access to data in the Redux state in the React component
// In this example, the value of this.props.count will now always have the same value
// As the count value in the Redux state
function mapStateToProps(state: { dogs: any; loading: any; }) {
  return {
    dogs: state.dogs,
    loading: state.loading,
  };
}

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(HomeScreen);
