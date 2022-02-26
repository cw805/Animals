---
categories:
- Food
date: "2019-05-14T14:46:10+06:00"
description: This is meta description
image: images/cat.png
tags:
- Photos
- Food
title: Animal Script
type: post
---


![](pics/group%20of%20animals.jpg "group pic2"){width="486"}

# Introduction

By the end of 2018, the estimated percentage of US households reported to having at least one pet was around 70%.
Among the companion animals, dogs and cats appear have been the most popular pets historically.
In 2018, there approximately 184 Million dogs and cats are living as household companion animals in the United States.
Each year, the number of cats and dogs entering animal shelters are around 7 Million.

As a professional animal enthusiast, my goal is to gather information from pet ownership and shelter statistics, and identify trends in animal outcomes in order to understand factors with significant impacts on pet adoption.
During the process, I hope to highlight strengths, weaknesses, and progress made by animal lovers everywhere, to continue efforts in raising awareness and advocating for animals without a home.

------------------------------------------------------------------------

# The Data Sets

##  {.tabset}

### About

1.  Animal Humane Society

The first data set records the outcome and intake statistics from the Humane society from 2015-2020.
This data set was used to investigate shelter intake groups by reason for surrender, as well as euthanasia by reason for surrender.

The second data set is the monthly total intake and outcome statistics.
January - July).
I wanted to focus on the numbers with this data set to explore the impact of COVID-19 on the shelters specifically.

3.  Austin Animal Shelter

The data sets is provided by a Kaggle hosted competition for the machine learning community to use for data science practice and social good.
The original data source is the Austin Animal Center, taken from the [merican society for the prevention of cruelty to animals](https://www.aspca.org)

### Methods

The data sets from the humane society were scraped as pdf files using Tabula.
They are available for download from their [live saving statistics](https://www.animalhumanesociety.org/about/lifesaving-statistics) website.
Since both data sets were extracted as whole pdf formats, I filtered through parts of the data sets relevant, and covert column types accordingly.

The Austin animal shelter data was downloaded and imported directly from [Kaggle's](https://www.kaggle.com/c/shelter-animal-outcomes/data) website for the "Shelter Animal Outcomes" competition.

Besides parsing to appropriate column types, I also converted most numbers into percentages.
When comparing differences between variables such as dog vs. cat or each year, numbers alone could be misleading without the total count.

Image sources:

[cover page](%22https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_96473296_cat-dog-and-rabbit-sitting-together-isolated-on-white-background-.html&psig=AOvVaw2_g3Ur_H__iCpChrzJ8xzd&ust=1630247317835000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJii2auk1_ICFQAAAAAdAAAAABAD%22)

[group of dogs](%22https://www.google.com/url?sa=i&url=https%3A%2F%2Faspengrovevet.com%2Fdog-care%2Fdog-senior-citizen%2F&psig=AOvVaw0rdkwNQWWaWKqsSapllXVK&ust=1630340258894000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCk6PXQ1vICFQAAAAAdAAAAABAs%22)

[funny dog](%22https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thesprucepets.com%2Ffunny-names-for-dogs-4797856&psig=AOvVaw1XDQ42GEv3jMZ7MMkD3asA&ust=1630511356965000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjk4KbO2_ICFQAAAAAdAAAAABAD%22)

[The cat](%22https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.scientificamerican.com%2Farticle%2Fcats-recognize-their-own-names-even-if-they-choose-to-ignore-them%2F&psig=AOvVaw1ZqdUROfU-oLb1Ds1UnmCN&ust=1630512447851000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC-zqzS2_ICFQAAAAAdAAAAABAD%22)







------------------------------------------------------------------------







------------------------------------------------------------------------

# As of 2021


```{r}
#ahs 2021
ggplot(monthly, aes(dates, total, group = intakes, 
                    color = intakes)) +
  geom_line(size = 1) +
  geom_point(size = 4) +
  labs(subtitle = "2021 Intake & Outcome Summary") 

```


![](Animal_Porject_files/figure-html/unnamed-chunk-8-1.png)<!-- -->

In the beginning of 2020, many have been working and studying from home during the lock down.
Animal shelters experienced higher than ever adoption rates.
As in-person work and school resumes, concerns were raised about pets adopted during the pandemic are getting surrendered and returned to the shelter when the owners no longer work from home full time.
From the humane society's report from January to this summer, both intakes and outcomes increased dramatically within one month and have been increasing more steadily in the spring.

------------------------------------------------------------------------





# Where do they come from

##  {.tabset}

### Table


```{r}
kable(surrender_stat, 
      col.names = c(" ", "2015", "2016", "2017", "2018", "2019", "2020"), digits = 2) %>%
      kable_styling("striped") 
```

<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;">   </th>
   <th style="text-align:left;"> 2015 </th>
   <th style="text-align:left;"> 2016 </th>
   <th style="text-align:left;"> 2017 </th>
   <th style="text-align:left;"> 2018 </th>
   <th style="text-align:left;"> 2019 </th>
   <th style="text-align:left;"> 2020 </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> surrender </td>
   <td style="text-align:left;"> 47.30% </td>
   <td style="text-align:left;"> 46.44% </td>
   <td style="text-align:left;"> 44.32% </td>
   <td style="text-align:left;"> 44.20% </td>
   <td style="text-align:left;"> 44.15% </td>
   <td style="text-align:left;"> 44.46% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> transfer </td>
   <td style="text-align:left;"> 34.4% </td>
   <td style="text-align:left;"> 35.4% </td>
   <td style="text-align:left;"> 36.5% </td>
   <td style="text-align:left;"> 38.7% </td>
   <td style="text-align:left;"> 37.9% </td>
   <td style="text-align:left;"> 35.0% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> stray </td>
   <td style="text-align:left;"> 17.7% </td>
   <td style="text-align:left;"> 15.9% </td>
   <td style="text-align:left;"> 17.1% </td>
   <td style="text-align:left;"> 14.5% </td>
   <td style="text-align:left;"> 16.2% </td>
   <td style="text-align:left;"> 19.8% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> cruelty </td>
   <td style="text-align:left;"> 0.7% </td>
   <td style="text-align:left;"> 2.2% </td>
   <td style="text-align:left;"> 2.1% </td>
   <td style="text-align:left;"> 2.5% </td>
   <td style="text-align:left;"> 1.7% </td>
   <td style="text-align:left;"> 0.8% </td>
  </tr>
</tbody>
</table>

```r
#humane society f2015-2020
```

### Plot


```r
surr_plot <- surrender_stat %>% pivot_longer(c("2015", "2016", "2017", "2018", "2019", "2020"), names_to = "year", values_to = "cases") %>%
  mutate(cases = parse_number(cases),
         year = parse_number(year))

ggplot(surr_plot, aes(year, cases, fill = reason)) +
  geom_col(position = position_dodge2(width = 1), width = 0.7) +
  facet_wrap(~reason, scales = "free_y") +
  theme_minimal() +
  theme(legend.position = "none") 
```

![](Animal_Porject_files/figure-html/unnamed-chunk-12-1.png)<!-- -->

##  {.unnumbered}

The owner surrender rate has a slight decline from 2015-2020.
The increase in stray animal intakes could be the indication that more animals are being abandoned by their owners; However, I interpret it as the shelters' effort in rescuing more animals over the years.
Cruelty cases spiked from 2016-2018, but decreased by almost 2% by 2020.





------------------------------------------------------------------------

# Outcomes & Trends




```{r}
# austin all 2013-16
ggplot(outcome_trend, aes(factor(Year), value, fill = AnimalType)) +
  geom_col(position = "dodge", width = 0.7) +
 facet_wrap(~ OutcomeType, scales = "free_y", ncol = 2) +
 scale_fill_brewer(palette = "Reds") +
labs(x = "Year" , y = NULL) +
  theme_minimal()
```

![](Animal_Porject_files/figure-html/unnamed-chunk-15-1.png)<!-- -->

This is a glimpse of the outcomes from the Austin animal shelter from 2013-2016.
It is encouraging that overall euthanasia rate has decreased over the years.
However, euthanasia in cats is far greater than dogs and considerably slower progress.
Surprisingly, there are around 25-30 % shelter dogs returned to their owners each year, which has increased over the years, but that is not the case in cats.



------------------------------------------------------------------------

## Dog Outcomes 2013-2016 {.tabset}

### Table



<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
<caption>Dog Adoptions 2013-16</caption>
 <thead>
  <tr>
   <th style="text-align:left;">   </th>
   <th style="text-align:left;"> 2013 </th>
   <th style="text-align:left;"> 2014 </th>
   <th style="text-align:left;"> 2015 </th>
   <th style="text-align:left;"> 2016 </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Transfer </td>
   <td style="text-align:left;"> 29.1% </td>
   <td style="text-align:left;"> 26.2% </td>
   <td style="text-align:left;"> 23.3% </td>
   <td style="text-align:left;"> 23.0% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Adoption </td>
   <td style="text-align:left;"> 39.4% </td>
   <td style="text-align:left;"> 41.5% </td>
   <td style="text-align:left;"> 41.8% </td>
   <td style="text-align:left;"> 45.1% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Euthanasia </td>
   <td style="text-align:left;"> 7.4% </td>
   <td style="text-align:left;"> 6.4% </td>
   <td style="text-align:left;"> 4.5% </td>
   <td style="text-align:left;"> 1.6% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Return_to_owner </td>
   <td style="text-align:left;"> 23.9% </td>
   <td style="text-align:left;"> 25.5% </td>
   <td style="text-align:left;"> 30.0% </td>
   <td style="text-align:left;"> 29.9% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Died </td>
   <td style="text-align:left;"> 0.2% </td>
   <td style="text-align:left;"> 0.3% </td>
   <td style="text-align:left;"> 0.3% </td>
   <td style="text-align:left;"> 0.3% </td>
  </tr>
</tbody>
</table>

### Plot


```{r}
dog_plot <- dog_outcomes %>%
   group_by(Year) %>%
   mutate(total = sum(n),
          percent = n/total)

ggplot(dog_plot, aes(Year, percent, fill = OutcomeType)) +
  geom_col(position = "dodge") +
 facet_wrap(~OutcomeType, scales = "free_y") +
 #coord_flip() +
 theme_minimal()
```



![](Animal_Porject_files/figure-html/unnamed-chunk-19-1.png)<!-- -->


```{r}
 #ggplot(dog_outcomes, aes(Year, n, fill = OutcomeType)) +
  #geom_bar(position = position_dodge2(width = .5), width = 1) +
```


##  {.unnumbered}

![](pics/FunnyDog.jpeg){width="31%"}

------------------------------------------------------------------------

## Cat Outcomes 2013-2016 {.tabset}

### Table



<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
<caption>Cat Adoptions 2013-16</caption>
 <thead>
  <tr>
   <th style="text-align:left;">   </th>
   <th style="text-align:left;"> 2013 </th>
   <th style="text-align:left;"> 2014 </th>
   <th style="text-align:left;"> 2015 </th>
   <th style="text-align:left;"> 2016 </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Transfer </td>
   <td style="text-align:left;"> 43.5% </td>
   <td style="text-align:left;"> 52.3% </td>
   <td style="text-align:left;"> 49.5% </td>
   <td style="text-align:left;"> 32.3% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Adoption </td>
   <td style="text-align:left;"> 45.3% </td>
   <td style="text-align:left;"> 35.4% </td>
   <td style="text-align:left;"> 38.1% </td>
   <td style="text-align:left;"> 56.3% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Euthanasia </td>
   <td style="text-align:left;"> 5.9% </td>
   <td style="text-align:left;"> 6.6% </td>
   <td style="text-align:left;"> 6.4% </td>
   <td style="text-align:left;"> 5.6% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Return_to_owner </td>
   <td style="text-align:left;"> 4.2% </td>
   <td style="text-align:left;"> 4.7% </td>
   <td style="text-align:left;"> 4.4% </td>
   <td style="text-align:left;"> 4.6% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Died </td>
   <td style="text-align:left;"> 1.1% </td>
   <td style="text-align:left;"> 1.0% </td>
   <td style="text-align:left;"> 1.6% </td>
   <td style="text-align:left;"> 1.2% </td>
  </tr>
</tbody>
</table>

### Cat plot


```{r}
cat_plot <- cat_outcomes %>%
   group_by(Year) %>%
   mutate(total = sum(n),
          percent = n/total)

ggplot(cat_plot, aes(Year, percent, fill = OutcomeType)) +
  geom_col(position = "dodge") +
 facet_wrap(~OutcomeType, scales = "free_y") +
 #coord_flip() +
 theme_minimal()
```


![](Animal_Porject_files/figure-html/unnamed-chunk-22-1.png)<!-- -->

## ![](pics/cat.jpeg "cat") {.unnumbered}

------------------------------------------------------------------------

# Euthanasia

The highlight for this table is that the proportion of animals with treatable conditions being euthanized decreased greatly over the years.
Most euthanized animals are from untreatable illnesses



##  {.tabset}

### Plot


```{r}
ggplot(euthanasia, aes(factor(year), cases, fill =
         Euthanasia, group = Euthanasia)) +
  geom_col(position = "dodge", width = 0.6) +
  geom_point() +
 geom_line() +
  facet_wrap(~Euthanasia, scales = "free_y", ncol= 1) +
  labs(x = NULL, y = NULL) +
  scale_fill_brewer(palette = "Oranges") +
  theme_minimal() +
  theme(legend.position = "none",
      plot.background = element_rect(colour = "black", size = 1)) 
```

![](Animal_Porject_files/figure-html/unnamed-chunk-24-1.png)<!-- -->

### Table


```{r}
euth_table <- as_tibble(ahs) %>%
  slice(33:35) %>%
  rename("Euthanasia"  =  'Animal Intake and Outcomes') %>%
  pivot_longer(c('2015','2016','2017','2018','2019','2020'), 
               names_to = "year", values_to = "cases" ) %>%
  mutate(cases = parse_number(cases),
          cases = ifelse(is.na(cases), 0, cases),
         year = parse_number(year)) %>%
  group_by(year) %>%
  mutate( total = sum(cases),
         cases = percent( cases/total, accuracy = 0.01)) %>%
  select(-4) %>%
  pivot_wider(names_from = year, values_from = cases) 

kable(euth_table) %>% kable_styling("striped")
```

<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> Euthanasia </th>
   <th style="text-align:left;"> 2015 </th>
   <th style="text-align:left;"> 2016 </th>
   <th style="text-align:left;"> 2017 </th>
   <th style="text-align:left;"> 2018 </th>
   <th style="text-align:left;"> 2019 </th>
   <th style="text-align:left;"> 2020 </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Unhealthy/Untreatable </td>
   <td style="text-align:left;"> 66.25% </td>
   <td style="text-align:left;"> 88.45% </td>
   <td style="text-align:left;"> 94.21% </td>
   <td style="text-align:left;"> 96.47% </td>
   <td style="text-align:left;"> 95.21% </td>
   <td style="text-align:left;"> 94.34% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Treatable Manageable </td>
   <td style="text-align:left;"> 32.01% </td>
   <td style="text-align:left;"> 9.48% </td>
   <td style="text-align:left;"> 4.83% </td>
   <td style="text-align:left;"> 2.30% </td>
   <td style="text-align:left;"> 4.32% </td>
   <td style="text-align:left;"> 4.11% </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Treatable Rehabilitatable </td>
   <td style="text-align:left;"> 1.73% </td>
   <td style="text-align:left;"> 2.08% </td>
   <td style="text-align:left;"> 0.97% </td>
   <td style="text-align:left;"> 1.24% </td>
   <td style="text-align:left;"> 0.48% </td>
   <td style="text-align:left;"> 1.55% </td>
  </tr>
</tbody>
</table>







------------------------------------------------------------------------

# Spaying/neutering

##  {.tabset}

### Dogs neutered/spayed

![](Animal_Porject_files/figure-html/unnamed-chunk-29-1.png)<!-- -->

### Cat neutered/spayed

![](Animal_Porject_files/figure-html/unnamed-chunk-30-1.png)<!-- -->

##  {.unnumbered}

Each year, most animals are spayed and neutered.
In some foster systems, animals are required to be spayed/neutered before adoption to prevent from more animals entering the shelters or euthanized.

------------------------------------------------------------------------

# Name & Adoption

##  {.tabset}

### cat with names

![](Animal_Porject_files/figure-html/unnamed-chunk-31-1.png)<!-- -->

### Dog with Names



![](Animal_Porject_files/figure-html/unnamed-chunk-33-1.png)<!-- -->





## Did your pet make the popular name list? {.tabset}

### Dogs


```{r}
kable(dog_names, caption = "dog names", row.names = NA) %>%
      kable_styling("striped")
```



<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
<caption>dog names</caption>
 <thead>
  <tr>
   <th style="text-align:left;"> Female </th>
   <th style="text-align:left;"> Male </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Daisy </td>
   <td style="text-align:left;"> Max </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Bella </td>
   <td style="text-align:left;"> Buddy </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Lucy </td>
   <td style="text-align:left;"> Charlie </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Princess </td>
   <td style="text-align:left;"> Rocky </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Maggie </td>
   <td style="text-align:left;"> Jack </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Luna </td>
   <td style="text-align:left;"> Chico </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ginger </td>
   <td style="text-align:left;"> Cooper </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Lola </td>
   <td style="text-align:left;"> Duke </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Sadie </td>
   <td style="text-align:left;"> Buster </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Rosie </td>
   <td style="text-align:left;"> Hank </td>
  </tr>
</tbody>
</table>

### Cats

<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
<caption>cat names</caption>
 <thead>
  <tr>
   <th style="text-align:left;"> Female </th>
   <th style="text-align:left;"> Male </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Bella </td>
   <td style="text-align:left;"> Oliver </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Luna </td>
   <td style="text-align:left;"> Max </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Lucy </td>
   <td style="text-align:left;"> Charlie </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Daisy </td>
   <td style="text-align:left;"> Leo </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Mia </td>
   <td style="text-align:left;"> Milo </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Emma </td>
   <td style="text-align:left;"> George </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Ginger </td>
   <td style="text-align:left;"> Oscar </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Lilly </td>
   <td style="text-align:left;"> Blue </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Molly </td>
   <td style="text-align:left;"> Cooper </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Emily </td>
   <td style="text-align:left;"> Sam </td>
  </tr>
</tbody>
</table>

------------------------------------------------------------------------

# Does color matter?


```r
#colors

cat_color <- cats %>%
  filter(OutcomeType == "Adoption") %>%
  count(Color, sort = TRUE) %>%
  slice(1:10) %>%
  rename(Cats = Color) %>% select(-2)

dog_color <- dogs %>%
  filter(OutcomeType == "Adoption") %>%
  count(Color, sort = TRUE) %>%
  slice(1:10) %>%
  rename( Dogs = Color) %>% select(-2)

popular_colors <- bind_cols(dog_color, cat_color)

kable(popular_colors) %>% kable_styling("striped")
```

<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> Dogs </th>
   <th style="text-align:left;"> Cats </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Black/White </td>
   <td style="text-align:left;"> Brown Tabby </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Brown/White </td>
   <td style="text-align:left;"> Black </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tan/White </td>
   <td style="text-align:left;"> Black/White </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tricolor </td>
   <td style="text-align:left;"> Brown Tabby/White </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Black </td>
   <td style="text-align:left;"> Orange Tabby </td>
  </tr>
  <tr>
   <td style="text-align:left;"> White </td>
   <td style="text-align:left;"> Tortie </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Black/Tan </td>
   <td style="text-align:left;"> Calico </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Tan </td>
   <td style="text-align:left;"> Orange Tabby/White </td>
  </tr>
  <tr>
   <td style="text-align:left;"> White/Brown </td>
   <td style="text-align:left;"> Blue Tabby </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Brown </td>
   <td style="text-align:left;"> Blue </td>
  </tr>
</tbody>
</table>

# Popular mixed Breeds ![](pics/dog.bw.webp "bw dog"){width="113"}


```r
mixes <- bind_cols(dog_mixed, cat_mixed)

kable(mixes, col.names = c("Dogs", "Cats")) %>% kable_styling("striped")
```

<table class="table table-striped" style="margin-left: auto; margin-right: auto;">
 <thead>
  <tr>
   <th style="text-align:left;"> Dogs </th>
   <th style="text-align:left;"> Cats </th>
  </tr>
 </thead>
<tbody>
  <tr>
   <td style="text-align:left;"> Miniature Schnauzer Mix </td>
   <td style="text-align:left;"> Domestic Medium Hair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> German Shepherd Mix </td>
   <td style="text-align:left;"> Domestic Shorthair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Pit Bull Mix </td>
   <td style="text-align:left;"> Domestic Medium Hair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Dachshund Longhair Mix </td>
   <td style="text-align:left;"> Domestic Shorthair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Pit Bull Mix </td>
   <td style="text-align:left;"> Domestic Shorthair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Chihuahua Longhair Mix </td>
   <td style="text-align:left;"> Domestic Medium Hair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Australian Cattle Dog Mix </td>
   <td style="text-align:left;"> Domestic Shorthair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Labrador Retriever Mix </td>
   <td style="text-align:left;"> Domestic Shorthair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Chihuahua Shorthair Mix </td>
   <td style="text-align:left;"> Domestic Shorthair Mix </td>
  </tr>
  <tr>
   <td style="text-align:left;"> Harrier Mix </td>
   <td style="text-align:left;"> Domestic Shorthair Mix </td>
  </tr>
</tbody>
</table>

------------------------------------------------------------------------

# Age

![](pics/senior-dogs-1024x726.jpg "old dogs")Puppies and Kittens are highly adoptable, especially kittens.
Besides the cuteness, some owners might take into account the health problems in older pets.
In adult cats, many might have a harder time getting adopted or have a higher chance of being returned due to compatiblity issues such as households with children, other animals, or simply another cat.
The age in this graph is counted in months.






```r
ggplot(age_outcome, 
       aes( x = months,
            y = ifelse(AnimalType == "Cat", n, -n),
            fill = AnimalType )) +
  geom_bar(stat = "identity") +
  coord_flip() +
  scale_y_continuous(limits = c(-2500, 3500),
                     breaks = seq(-2500,3000,1500),
                     labels = abs) +
  labs(title = "Adoption distribution by Age",
       y = "Numbers Adopted", x = "Age in months") +
  theme (plot.title = element_text(size=10)) +
  theme_bw()
```

![](Animal_Porject_files/figure-html/unnamed-chunk-42-1.png)<!-- -->

------------------------------------------------------------------------

# Summary Notes

It is important to note that these data sets and my methods aren't without weaknesses and bias.
Accurate shelter and rescuing data are hard to obtain since there is no central reporting system.
Overall numbers on pet owner statistics were collected from surveys, so we can only consider them as estimates.
The majority of these data set are already calculated and categorized as summaries.

For example, it is common for shelter animals to be returned if they are having a hard time settling in with the family.
I cannot trace the relationship between the adopted that were later returned.
The most important factor missing from these data is the "surrender by owner" statistics.
I think it would be worth while to understand why they are being surrendered.
Some of these might include financial, behavioral, or health problems, which can only be reported at the owner's discretion as well.

There are more questions to be asked and analyzed for animal adoptions.
Advocating for animals is an ongoing effort, and my work doesn't end with this project either.
These data reports may only be used mainly by shelters or rescuing groups.
I believe they would be powerful tools in educating pet owners or soon-to-be owners.
I will list some resources I found below.

Too often pets are being adopt or purchased when the owners aren't prepared and ready.
Taking an animal into our lives is a big commitment that should be taken seriously.
We shouldn't get a pet just because they're cute (even though they certainly are).
They might be chaotic drooling little monsters that demand food and attention 24/7, the friendship and companion with a animal is so so beautiful.

> He might only be here for a part of your life, but for him, you are his whole life.

------------------------------------------------------------------------

# Resources

[The American Veterinary Medical Association](http://www.avma.org)

[The National Council on Pet Population Study & Policy (NCPPSP)Shelter Animal Count](http://www.petpopulation.org)

[American Pet Products Association(APPA)](http://www.americanpetproducts.org/)

[Shelter Animal Count](https://www.shelteranimalscount.org)

[American society for the prevention of cruelty to animals(ASPCA)](https://www.aspca.org "American society for the prevention of cruelty to animals")

[Best Friends Animal Society](https://bestfriends.org)