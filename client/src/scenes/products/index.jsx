import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import Loading from "components/Loading";

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: theme.palette.primary[900],
        backgroundImage: `none`,
        boxShadow: theme.shadows[2],
        borderRadius: theme.shape.borderRadius,
      }}
    >
      {/* <CardContent sx={{ flex: "1 0 auto" }}> */}
      <CardContent>
        <Typography
          sx={{ fontSize: 22 }}
          fontWeight="bold"
          color={theme.palette.secondary[400]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded((prev) => !prev)}
          sx={{
            color: theme.palette.primary[100],
            backgroundColor: theme.palette.primary[400],
          }}
        >
          {isExpanded ? "Hide" : "Show"} Details
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.secondary[200] }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>Yearly Sales: {stat.yearlySalesTotal}</Typography>
          <Typography>
            Yearly Units Sold: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  // console.log("data:", data)
  // console.log("isLoading:", isLoading)
  // console.log("isError:", isError)
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Header title="PRODUCTS" subtitle="Products Overview" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}
        </Box>
      ) : (
        <><Loading /></>
      )}
    </Box>
  );
};

export default Products;
