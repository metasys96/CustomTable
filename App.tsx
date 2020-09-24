import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {CustomTable} from '@metasys96/react-native-custom-table';
import {data} from './data';

const swipeRightBtns = [
  {
    text: 'Delete',
    backgroundColor: '#D11A2A',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
  },
];

const swipeLeftBtns = [
  {
    text: 'Archive',
    backgroundColor: '#009d00',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
  },
];

const App = () => {
  const [inputValue, setText] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const onChangeText = (text: string) => {
    setText(text);
  };

  const archiveRow = (rowData: any) => {
    console.log('rowData to archive :-', rowData);
  };

  const deleteRow = (rowData: any) => {
    console.log('rowData to delete :-', rowData);
  };

  const getSwipeLeftBtns = (dataRow: any) => {
    return swipeLeftBtns.map((element) => ({
      ...element,
      onPress: () => archiveRow(dataRow),
    }));
  };

  const getSwipeRightBtns = (dataRow: any) => {
    return swipeRightBtns.map((element) => ({
      ...element,
      onPress: () => deleteRow(dataRow),
    }));
  };

  const getTableRow = ({item, index}: any) => {
    return (
      <View style={styles.tableCell}>
        <Text key={index}>{item.name}</Text>
      </View>
    );
  };

  const onRefresh = () => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, 1000);
  };

  return (
    <View style={styles.conatiner}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => onChangeText(text)}
          value={inputValue}
          placeholder="Search by name"
          placeholderTextColor="#d3d3d3"
        />
      </View>
      <CustomTable
        tableData={data}
        renderRow={getTableRow}
        searchText={inputValue}
        searchTextForKey={'name'}
        swipeLeftButtons={getSwipeLeftBtns}
        swipeRightButtons={getSwipeRightBtns}
        tableContainerStyle={styles.tableContainer}
        ItemSeparatorComponent={() => (
          <View style={styles.tableCellSeparator} />
        )}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        autoClose={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#3498DB',
    paddingTop: 50,
  },
  tableContainer: {
    backgroundColor: '#FFFFFF',
  },
  tableCellSeparator: {
    height: 0.5,
    backgroundColor: '#d3d3d3',
  },
  tableCell: {
    height: 60,
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#d3d3d3',
  },
  inputContainer: {padding: 5},
  inputStyle: {
    height: 50,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
});

export default App;
