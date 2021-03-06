import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171D32'
  },

  content: {

  },

  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color:'#FFF'
  },

  addBtn: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0093FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    }
  },

  modal: {
    flex: 1,
    backgroundColor: '#171D32'
  },

  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  modalTitle: {
    marginLeft: 10,
    fontSize: 20,
    color: "#FFF"
  },

  modalBody: {
    marginTop: 15
  },

  modalInput: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FAFAFA',
    padding: 9,
    height: 85,
    borderRadius: 5,
    textAlignVertical: 'top',
    color: '#000'
  },

  modalAddBtn: {
    backgroundColor: '#FAFAFA',
    marginTop: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },

  modalAddText: {
    fontSize: 20,
    color: '#131313'
  }
});