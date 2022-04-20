import {React , useState} from 'react'
import { Grid , Card,CardMedia,CardContent,Typography,CardActions,IconButton} from '@material-ui/core'
import { AddShoppingCart , ChangeHistory, Delete } from '@material-ui/icons'
//  import Product from './Product';
import useStyles from './Styles.js'
import productes from './Item'
import { styled, alpha } from '@material-ui/core';
import {InputBase , Box} from '@material-ui/core'
import {Search} from '@material-ui/icons';
import Footer from './Footer.js'



const Searchs = styled('div')(({ theme }) => ({
  //position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  paddingLeft: '30px',
  margin : 'auto',
  display : 'flex',
  height : "70px",
  width : "70%",
  alignItems : 'center'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  //position: 'absolute',
  marginLeft : '20px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointer : 'cursor'
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: '70px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '150ch',
      '&:focus': {
        width: '150ch',
      },
    },
  },
}));




function Products() {
  const classes = useStyles();
  
    const [item , setItem] = useState('');
    //const menuItems = [...new Set(productes.map((product => product.name)))];
   
    //const search = () => { productes.filter( product => product.name.toLocaleLowerCase().includes(smallLetter.toLocaleLowerCase()))}
  // const [state,setState] = useState({
  //   raised:false,
  //   shadow:1,
  // })
  return (
    <div>
    <main className={classes.media}>
    <div className = {classes.search}>
    <div>
    <Searchs>
    <SearchIconWrapper>
      <Search  />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
      onChange = {(e)=>setItem(e.target.value)}
      value = {item} 
    
    />
  </Searchs>
    </div>
     </div>
      <div  className={classes.toolbar}/>
    <Grid container justify="center" spacing = {6} >
    
    {productes.filter( product => product.name.toLocaleLowerCase().includes(item.toLocaleLowerCase())).map((filteredProduct) => ( 
      <Grid item key = {filteredProduct.id} xs = {12} sm = {6} md = {4} lg={3}>
     <Card className = {classes.root}>
      <CardMedia
      component="img"
      image={filteredProduct.image}
      height = "300px"
    />
    <CardContent>
    <div className={classes.cardContent}>
    <Typography gutterBottom variant="h5" component="div">
      {filteredProduct.name}
     </Typography>
     <Typography variant="h5" component = "div">
     {filteredProduct.price}
      </Typography>
     </div>
   
    <Typography variant="body2" color="text.secondary">
      {filteredProduct.description}
    </Typography>
  </CardContent>
    <CardActions disableSpacing className={classes.cardActions}>
     <IconButton aria-label = "Add to Cart">
     
     <AddShoppingCart />
     
  </IconButton>
  <IconButton className = {classes.delete} aria-label = "Delete from Cart">
  <Delete />
  </IconButton>
  </CardActions>
      </Card>
      </Grid>
    ))}</Grid>
    <Footer/>
    </main>
    
    </div>
  )
}

export default Products