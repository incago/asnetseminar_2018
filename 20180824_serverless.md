# hello serverless

## Serverless 란 무엇인가?

- Serverless Architecture
  - 특정 작업을 수행하기 위해서 컴퓨터를 혹은 가상머신에 서버를 설정하고, 이를 통하여 처리 하지 _않는다_
  - BaaS (Backend as a Service) 혹은 FaaS (Function as a Service) 에 의존하여 작업을 처리한다
- Serverless Framework 와 구분하자
  - Serverless Architecture 를 사용하기위해 사용하는 프레임워크(비슷한 것으로 APEX 란 것이 있다)
  - 아키텍쳐든 프레임워크든 Serverless(서버리스)로 불리기에 관련하여 말을하거나 글을 쓸 때 잘 구분해야 할 것

## IaaS, PaaS, BaaS, FaaS 클라우드에서 사용하는 용어들

- IaaS(Infrastructure as a Service)
  - 예) AWS, Azure, Google Cloud
- PaaS(Platform as a Service)
  - 예) AWS Elastic Beanstalk, Azure App Services
- BaaS(Backend as a Service)
  - 예) Firebase, Parse, Kinvey
- FaaS(Function as a Service)
  - 예) AWS Lambda, Azure Function, Google Cloud Functions

## 왜 Serverless 를 사용해야하는가?

- [Benefits of Serverless Applications](https://serverless.com/learn/)
  - Zero administration
    - Deploy code without provisioning anything beforehand, or managing anything afterward. There is no concept of a fleet, an instance, or even an operating system. No more bothering the Ops department.
  - Auto-scaling
    - Let your service providers manage the scaling challenges. No need to fire alerts or write scripts to scale up and down. Handle quick bursts of traffic and weekend lulls the same way -- with peace of mind.
  - Pay-per-use
    - Function-as-a-service compute and managed services charged based on usage rather than pre-provisioned capacity. You can have complete resource utilization without paying a cent for idle time. The results? 90% cost-savings over a cloud VM, and the satisfaction of knowing that you never pay for resources you don’t use.
  - Increased velocity
    - Shorten the loop between having an idea and deploying to production. Because there's less to provision up front and less to manage after deployment, smaller teams can ship more features. It's easier than ever to make your idea live.

## 사용해보자

- [Develop a Serverless Backend using Node.js on AWS Lambda](https://egghead.io/courses/develop-a-serverless-backend-using-node-js-on-aws-lambda)

## References

- [서버리스 아키텍쳐란?](https://velopert.com/3543)
- [(번역) 서버리스 아키텍처](https://blog.aliencube.org/ko/2016/06/23/serverless-architectures/)
- [Aws 가 제안하는 서버리스 아키텍처](https://www.slideshare.net/awskorea/aws-77558771)
- [Serverless 와 기술도입, Backend Application 의 미래](https://medium.com/vingle-tech-blog/serverless%EC%99%80-%EA%B8%B0%EC%88%A0%EB%8F%84%EC%9E%85-backend-application%EC%9D%98-%EB%AF%B8%EB%9E%98-8f114a8b00d5)
- [AWS Lambda 를 시작하기 전 알았으면 좋았을것들](https://medium.com/@herryhan2435/aws-lambda%EB%A5%BC-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EC%A0%84-%EC%95%8C%EC%95%98%EC%9C%BC%EB%A9%B4-%EC%A2%8B%EC%95%98%EC%9D%84%EA%B2%83%EB%93%A4-788bd3b3bdd2)
