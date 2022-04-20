import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme)=>({
    root: {
        maxWidth : '80%',
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    media : {
        height : 0,
        marginTop : '5.25%'
    },
    delete : {
       marginLeft : 'auto'
    },
    button : {
        display : 'flex',
        marginLeft :" auto",
    },
    navbarbutton : {
        display : 'flex',
        marginLeft : theme.spacing(20),
    },
    search : {
         marginBottom: '20px'
    },
    link: {
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(12),
        "&:hover": {
          color: "white",
          borderBottom: "3px solid white",
          borderRadius : '3px'
        },
        cursor: 'pointer',
        textDecoration : 'none'
      },
      logo: {
        flexGrow: "1",
        cursor: "pointer",
      },
  
    typo : {
        textAlign : "center",
        marginLeft : "auto",
    },
    categories : {
        marginLeft : "auto",
    },
    app : {
        display : 'flex'

    //    backgroundColor : 'white',
    //    color : 'black',
    //    spacing : '10%'
    },
    cardActions: {
        display : 'flex',
        justifyContent : 'flex-start'
    },
    cardContent:{
        display : 'flex',
        justifyContent: 'space-between',
    },   
    drawer : {
        textDecoration : "none",
        textAlign :"center",
        
        
    },
    drawers : {
        width : "200px",
            },
    footer : {
            marginTop : "20px",
            width : "100vw",
            height: "500px",
            paddingTop : "50px",
            backgroundColor: '#C3CBD6',
            // '&:hover': {
            //   backgroundColor: '#7C8FA9',
            //   opacity: [0.9, 0.8, 0.7],
            // }
        
    },
    container : {
        display : 'flex',
        flexDirection : "row"
    }
}));
