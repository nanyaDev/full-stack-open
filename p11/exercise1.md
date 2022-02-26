**Language** 
Ruby

**CI/CD Steps**
 - Linting: RuboCop
 - Testing: RSpec

**CI/CD Options**
 - Self Hosted: Jenkins, Travis CI, CircleCI
 - Cloud Based: GitHub Actions, GitLab CI/CD, BitBucket Pipelines

**Self Hosted vs Cloud Based**
Based on the organisation size, cloud based CI/CD would seem to be the natural choice, since it takes care of a lot of the setup and maintenance, which frees up developers to work on other parts of the product. Some additional questions to consider are:

1. Are there any unique CI/CD requirements that fall outside the scope of cloud based solutions?
2. Will the project build in a reasonable of time on the machines provided by cloud based solutions?
3. Do we have team members with the required skillset to set up and maintain a self hosted solution?
4. What are the projected costs of going with a cloud based solution versus a self hosted solution?