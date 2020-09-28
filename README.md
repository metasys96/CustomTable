# react-native-custom-table

Cross-platform development is now an essential aspect of software development. Node Packet Manager, the online repository is a go to site for React Programmers. This is MetaSys’ contribution based on challenges we had while developing a single application for both Android and iOS. We offer a flexible NPM package, for custom table widgets which will work on both Android and iOS platforms. The package is based on React hooks and typescript, which provides an error-free custom table. It also gives you a clean and consistent look and feel on iOS and Android devices with high performance.

This React Native package has the Custom Flatlist with most of the common usage functionalities like swipe buttons, filter table row, pull to refresh and load more on reach end of the data. The code takes care of most use cases for the flat list and swipe functionality. Developers can pass the required properties and get the results easily and very quickly. The documentation below will help you to easily integrate with your React Native projects.

This version is compatible with react-native 0.60 and above.

## Content

1. Installation and Linking

2. Screenshots

3. Getting stated

4. Properties

5. Contribution

## Installation

Run npm i @metasys96/react-native-custom-table –save

## Screenshot

<img  src="https://github.com/metasys96/CustomTable/blob/master/screenshot/custom-table.png?raw=true"  width="700"  height="700"/>

**Getting started**
Add @metasys96/react-native-custom-table to your JS file.

**CustomTable**

```
import {CustomTable} from '@metasys96/react-native-custom-table';
import {data} from ‘./src/data';

// Right button props
const swipeRightBtns = [
{
text: 'Delete',
backgroundColor: '#D11A2A',
underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
},
];

// Left button props
const swipeLeftBtns = [
{
text: 'Archive',
backgroundColor: '#009d00',
underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
},
];

const App = () => {
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

const getTableRow = ({item, index}: any) => {  // Returning table rows
return (
<View style={styles.tableCell}>
<Text key={index}>{item.name}</Text>
</View>
);
};

const onRefresh = () => {
setIsFetching(true);
setTimeout(() => { setIsFetching(false); }, 1000);
};

return (
<View style={styles.conatiner}>
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
/>
</View>
);};

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
}});

export default App;

```

**Data**

export const data = [
{ name: 'Liam' },
{ name: ‘Noah },
{ name: 'William' },
{ name: ‘James' },
{ name: 'Oliver' },
{ name: ‘Benjamin' },
{ name: 'Lucas'},
];

**Properties**

| Name                   | Description                                                                 | Type                                        | Required                  |
| ---------------------- | --------------------------------------------------------------------------- | ------------------------------------------- | ------------------------- |
| tableData              | Data in array                                                               | Array                                       | Required                  |
| renderRow              | Provide an item from data to render the table row                           | ReactNode                                   | Required                  |
| renderRow              | Provide an item from data to render the table row                           | ReactNode                                   | Required                  |
| searchText             | Use to filter the table rows by search text                                 | String Not                                  | Required                  |
| searchTextForKey       | Use to specify the key to compare the search text for a row                 | String                                      | Not Required              |
| swipeLeftButtons       | Swipe-out button props for left                                             | array                                       | Not Required              |
| swipeRightButtons      | Swipe-out button props for right                                            | array                                       | Not Required              |
| tableContainerStyle    | Table container Style                                                       | Object                                      | Not Required              |
| ItemSeparatorComponent | Rendered in between each item                                               | [ReactClass]                                | Not Required              |
| extraData              | A property for telling the list to re-render                                | Any                                         | Not Required              |
| keyExtractor           | Use to set unique key for an item                                           | String                                      | Required                  |
| Horizontal             | If true, renders items next to each other horizontally                      | Boolean                                     | Not Required              |
| initialScrollIndex     | Display table row at initialScrollIndex                                     | Number                                      | Not Required              |
| Invert                 | Reverses the direction of scroll                                            | Boolean                                     | Not Required              |
| onEndReached           | Called over when scroll reached to end of the table row                     | (info: {distanceFromEnd: number}) => void   | Not Required              |
| onEndReachedThreshold  | How far from the end in units of visible length of the list                 | Number                                      | Not Required              |
| onRefresh              | It is called when pulled the table rows to refresh table data functionality | () => void                                  | Not Required              |
| refreshing             | Waiting for the new data to load on pulled to refresh functionality.        | Boolean                                     | Not Required              |
| autoClose              | Auto close on swipe button press                                            | Boolean                                     | Not Required              |
| Close                  | close on swipe button press                                                 | Boolean                                     | Not Required              |
| disabled               | Whether to disable the sSwipe-out                                           | Boolean                                     | Not Required              |
| onOpen                 | Called on opening swipe out buttons                                         | (sectionId, rowId, direction:string)=> void | Not Required              |
| onClose                | Called when on close of swipe out buttons                                   | (sectionId, rowId, direction:string)=> void | Not Required              |
| Sensitivity            | Change the sensitivity of Swipe-out button gesture                          | Number                                      | Not Required (Default 50) |
| buttonWidth            | Each button with of Swipe-out buttons                                       | Number                                      | Not Required              |

**Methods**

**1.** **scrollToEnd()**

To schools to the end of the content.
scrollToEnd(([params]: object));

Example:
this.flatListRef.scrollToEnd();

**2.** **scrollToIndex()**

To schools to the item at the specified index.
scrollToIndex(([params]: object));

Example:
this.flatListRef.scrollToIndex({animated: true, index: randomIndex});

**Button** **Properties**

| Name            | Description                                | Type      | Default    |
| --------------- | ------------------------------------------ | --------- | ---------- |
| backgroundColor | Background color                           | String    | '#b6bec0'  |
| color           | text color                                 | String    | '#ffffff'  |
| component       | pass custom component to Swipe-out buttons | ReactNode | null       |
| onPress         | function executed onPress                  | Function  | null       |
| text            | Text                                       | String    | 'Click Me' |
| type            | default, delete, primary, secondary        | String    | 'default'  |
| underlayColor   | Swipe-out button underlay color on press   | String    | Null       |
| disabled        | disable swipe-out button                   | Boolean   | false      |

**Contribution**

Any type of issues are welcome. Please add screenshots of the bug and code snippet. Also the quickest way to solve the bug is to reproduce it with one of the examples. We would also welcome Pull Requests.

git clone https://github.com/metasys96/CustomTable.git

`npm install`

`react-native run-android` or `react-native run-android`

Copyright and License

## Author

[MetaSys Software Pvt. Ltd.](https://github.com/metasys96)

## License

[MIT](./LICENSE)

Copyright 2020 MetaSys Software Pvt. Ltd. All rights reserved.
