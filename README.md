# 목차
[프로젝트명 & 개발기간](#프로젝트명-개발기간) <br/><br/>
[1. 프로젝트 소개](#프로젝트-소개) </br><br/>
[2. 담당업무](#담당업무) </br><br/>
[3. 개발환경](#개발환경) </br><br/>
[4. ERD](#개체-관계-다이어그램) </br><br/>
[5. UseCase](#유스케이스) </br><br/>
[6. Jira - 일정관리](#지라를-활용한-일정관리) </br><br/>
[7. API 명세서](#응용-프로그램-인터페이스-명세서) </br><br/>
[8. 핵심기능](#핵심기능) </br><br/>
[9. 회원 유형별 메인 페이지 소개](#회원-유형별-메인-페이지-소개) </br><br/>
[10. 프로젝트 동작 시나리오](#프로젝트-동작-시나리오) </br><br/>
[11. 트러블 슈팅 경험](#트러블-슈팅-경험) </br><br/>
[12. 프로젝트 회고](#프로젝트-회고) </br><br/>

# 프로젝트명-개발기간
![image](https://github.com/user-attachments/assets/df909e7f-b860-4b7a-8617-16e2cde9181b) <br/><br/>
[목차로 이동하기](#목차)<br/><br/>

## 프로젝트 소개
![image](https://github.com/user-attachments/assets/ae203d6d-0160-4636-9e74-89fc0162d3f0) <br/><br/>
![image](https://github.com/user-attachments/assets/3b1f5847-22b2-4262-b951-305cfb85d270) <br/><br/>
[목차로 이동하기](#목차)<br/><br/>

## 담당업무
![image](https://github.com/user-attachments/assets/66ad3f46-7783-4e5c-9ea8-cdef8bea6af3) <br/><br/>
![image](https://github.com/user-attachments/assets/1efcfd84-5b90-45fa-be91-8181ffd4baed) <br/><br/>
![image](https://github.com/user-attachments/assets/6aac4ecd-0917-4d35-8f03-acd383317152) <br/><br/>
[목차로 이동하기](#목차)<br/><br/>

## 개발환경
![image](https://github.com/user-attachments/assets/741761d0-6461-48f6-890b-5ee28c516c38)<br/><br/>
[목차로 이동하기](#목차)<br/><br/>

## 개체-관계-다이어그램
![DeliveryOracle_ERD](https://github.com/user-attachments/assets/5efc7279-a238-4d75-bc04-8155d1fbc517)<br/><br/>
- 총 14개의 테이블을 제작 하였습니다.

<details>
  <summary>테이블 Entity 상세보기 ☞ Click Here!!</summary> <br/>
1. UserInformation (유저 정보 테이블)

- 유저 아이디 : user_id
- 이메일 : Email
- 비밀번호 : Password
- 닉네임 : Name
- 가입 날짜 : registration_date
- 수정 날짜 : modification_date

2. userinfo_auth (유저 권한 테이블)

- 권한 번호 : auth_no
- 유저 아이디 : user_id
- 인증 : auth

3. StoreRegistration (업체 가입정보 테이블)

- 업체 아이디 : store_id
- 업체 주인 아이디 (유저 정보 테이블의 유저 아이디) : owner_id
- 업체 이름 : store_name
- 업체 주소 : store_address
- 업체 설명 : store_description
- 업체 이미지 : store_image
- 승인 상태 : approval_status
- 승인 날짜 : approval_date
- 수정 날짜 : modification_date
- 업체 x 좌표 : store_x
- 업체 y 좌표 : store_y
- 업체 카테고리 : store_ca

4. StoreInformation (업체 정보 및 메뉴 정보가 담긴 테이블)

- 업체 아이디 : store_id
- 메뉴명 : menu_name
- 메뉴 가격 : menu_price
- 메뉴 이미지 : menu_image
- 메뉴 상태정보 : menu_visiblity_status

5. OrderInformation (주문 테이블)

- 주문 번호 : order_id
- 주문자 아이디 : customer_id
- 업체 아이디 : store_id
- 주문 내용 : order_details
- 총합 : total_price
- 주문 상태 : order_approval_status
- 주문 날짜 : order_date
- 주문자 x좌표 : user_x
- 주문자 y좌표 : user_y

6. RiderDelivery (라이더 배달 테이블)c

- 배달 번호 : delivery_id
- 주문 번호 : order_id
- 업체 아이디 : store_id
- 업체 이름 : store_name
- 업체 주인 이메일 : stroe_owner_email
- 라이더 아이디 : rider_id
- 라이더의 현위치에서 업체까지와의 거리 : distance_to_store
- 업체에서 주문자(user)까지의 거리 : distance_to_user
- 배달가격 : delivery_price
- 업체 x 좌표 : store_x
- 업체 y 좌표 : store_y
- 주문자 x 좌표 : user_x
- 주문자 y 좌표 : user_y
- 배달 수락 날짜 : order_date

7. Comments (댓글 테이블)

- 댓글 번호 : comment_id
- 업체 아이디 : store_id
- 작성자 아이디 : author_id
- 작성자 이름 : author_name
- 내용 : content
- 별점 : rating
- 댓글 상태정보 : visbility_status
- 작성 날짜 : creation_date
- 수정 날짜 : modification_date
- 대댓글 아이디 (답글 작성시 어떤 댓글의 답글인지 확인하기 위한 댓글 번호) : reply_id
- 댓글의 깊이 : depth (depth가 1이면 댓글 2이면 답글)

8. Reports (댓글 신고 테이블)

- 신고 번호 : report_id
- 댓글 번호 : comment_id
- 댓글 작성자 아이디 : comment_author_id
- 신고 상태 : report_status
- 신고 내역 : report_text
- 신고자 아이디 : reporter_id
- 신고 날짜 : report_date

9. StoreReports (업체 신고 테이블)

- 신고번호 : report_id
- 주문 번호 : order_id
- 업체 번호 : store_id
- 신고 상태 : report_status
- 신고 내역 : report_text
- 신고자 아이디 : reporter_id
- 신고 날짜 : report_date

10. account (계좌 테이블)

- 계좌 번호 : account_id
- 계좌 주인 아이디 : owner_id
- 계좌 주인 이름 : owner_name
- 계좌 주인 이메일 : owner_email
- 계좌 상태 : account_status
- 계좌 총액 : account_amount
- 계좌 생성 날짜 : approval_date
- 계좌 수정 날짜 : change_date

11. accountstatus(입출금 상태 테이블)

- 번호 : num
- 계좌 번호 : account_id
- 금액 : amount
- 출금과 예금 (2개의 타입이 존재) : type
- 날짜 : date

12. rankpoint (포인트 정보 테이블)

- 등급명 : rating
- 포인트 금액 : score
 
```sql
insert into rankpoint (Rating,score) value("Bronze",5000);
insert into rankpoint (Rating,score) value("Silver",10000);
insert into rankpoint (Rating,score) value("Gold",50000);
insert into rankpoint (Rating,score) value("Platinum",100000);
```

13. visitors (방문자수 테이블)

- 이메일 : email
- 방문 날짜 : visit_date

14. StoreRegistrationAudit (업체 수정 정보가 담긴 테이블)

- 트리거에 의해 기록되는 트리거 쿼리
```sql
CREATE TABLE StoreRegistrationAudit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT,
    owner_id INT,
    store_name VARCHAR(30),
    store_address VARCHAR(50),
    store_description TEXT,
    store_image VARCHAR(255), 
    approval_status TINYINT(1),
    approval_date DATETIME,
    modification_date TIMESTAMP,
    store_x DECIMAL(15, 12),
    store_y DECIMAL(15, 12),
    store_ca VARCHAR(20),
    change_type ENUM('UPDATE', 'DELETE'),
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- 업체 정보 수정 시 적용되는 트리거 이전 정보를 저장하기 위해 걸어 둔 트리거
```sql
CREATE TRIGGER before_store_update
BEFORE UPDATE ON StoreRegistration
FOR EACH ROW
BEGIN
    INSERT INTO StoreRegistrationAudit (
        store_id, owner_id, store_name, store_address, store_description, 
        store_image, approval_status, approval_date, modification_date, 
        store_x, store_y, store_ca, change_type, change_date
    ) VALUES (
        OLD.store_id, OLD.owner_id, OLD.store_name, OLD.store_address, OLD.store_description, 
        OLD.store_image, OLD.approval_status, OLD.approval_date, OLD.modification_date, 
        OLD.store_x, OLD.store_y, OLD.store_ca, 'UPDATE', NOW()
    );
```

- 업체 삭제시 적용되는 트리거
```sql
CREATE TRIGGER before_store_delete
BEFORE DELETE ON StoreRegistration
FOR EACH ROW
BEGIN
    INSERT INTO StoreRegistrationAudit (
        store_id, owner_id, store_name, store_address, store_description, 
        store_image, approval_status, approval_date, modification_date, 
        store_x, store_y, store_ca, change_type, change_date
    ) VALUES (
        OLD.store_id, OLD.owner_id, OLD.store_name, OLD.store_address, OLD.store_description, 
        OLD.store_image, OLD.approval_status, OLD.approval_date, OLD.modification_date, 
        OLD.store_x, OLD.store_y, OLD.store_ca, 'DELETE', NOW()
    );
 ```

- 계좌 생성 트리거 (회원가입 시 계좌가 자동으로 생성되도록 하는 트리거)
```sql
CREATE TRIGGER after_user_registration
AFTER INSERT ON userinformation
FOR EACH ROW
BEGIN
    INSERT INTO account (
        owner_id, owner_name, owner_email, account_status, account_amount, change_date
    ) VALUES (
        NEW.user_id, NEW.Name, NEW.Email, 1, 0, NOW()
    );
 ```

- 계좌 입출금시 자동으로 현재 나의 계좌의 값을 변경하는 트리거
```sql
CREATE TRIGGER accountstatus_insert
AFTER INSERT ON accountstatus
FOR EACH ROW
BEGIN
    UPDATE account
    SET account_amount = account_amount + NEW.amount,
        change_date = NOW()
    WHERE account_id = NEW.account_id;
```
</details>
<br/><br/>
[목차로 이동하기](#목차)<br/><br/>

## 유스케이스
![DeliveryOracle_UseCase drawio](https://github.com/user-attachments/assets/9013e409-9b7f-46ba-bc21-3d35c740edc5)
- **User, Store, Admin, Rider** 순으로 **4가지** 회원 유형의 <br/>
  전체적인 **작업(기능)** 수행 프로세스를 **UseCase** 를 활용하여<br/>
  표현 하였습니다.<br/><br/>
[목차로 이동하기](#목차)<br/><br/>

## 지라를 활용한 일정관리
![image](https://github.com/user-attachments/assets/1e17488e-dea1-4caf-9eb1-80a834bddb6f)<br/><br/>

**1. 담당자 배정**<br/>

색상별로 담당자를 배정하였고, 각자가 맡은 파트별로 나누었습니다.<br/><br/>

**2. 진행 상황 관리**<br/>

각자가 맡은 기능이 구현되었는지? 진행 중인지?<br/> 
시작 전인지? 파악하기 위해 작업 진행 중인 경우 **진행중**<br/> 
완료가 되었다면 **완료**라는 상태 값을 찍어 놓고 표시하기로<br/>
약속하였습니다.<br/><br/>

모든 팀원이 팀 회의를 통해 작업 진행 상황을 공유하며 진행하였습니다.<br/><br/>

**3. 문제 해결**<br/>

작업을 이행해야 하는 날짜에 아무런 상태 값이 표시되어 있지 않다면<br/>
즉시 어떤 문제점과 어려움이 있는지를 파악하여 함께 공유하고 의견을<br/>
나누며 문제 해결 방법을 찾아나가는 방향으로 진행하였습니다.<br/><br/>

[목차로 이동하기](#목차)<br/><br/>
  
## 응용 프로그램 인터페이스 명세서
- POSTMAN을 활용하여 작성한 API 명세서 링크 ☞ Click Here!! ↓↓↓<br/>
<a>https://documenter.getpostman.com/view/35282954/2sAXjDevm5<a/> <br/><br/>
[목차로 이동하기](#목차)<br/><br/>

# 핵심기능
<!--
제미나이 AI 활용 (날씨, 온도, 계절) 기반 메뉴추천기능
악성 유저 / 업체 간의 신고기능
제작이유 : 어느 한쪽만 배려해주는게 아닌 양쪽 서로의 입장을 배려해주기 위함
-->
[목차로 이동하기](#목차)<br/><br/>

## 회원 유형별 메인 페이지 소개

**DeliveryOracle 메인 페이지**<br/> 
- 4가지 회원 유형별로 접속할 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/57ea03c4-6967-4f76-8ec8-10d5c0d6bf92)

**User 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/9020a43d-d8d4-419a-8788-d90963a5ca67) <br/><br/>

**Store 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/4c66275d-141c-4a20-8aeb-9673f1c5311f ) <br/><br/>

**Admin 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/88bb835e-d355-4a28-89ca-940eaaf2b4ce) <br/><br/>

**Rider 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/b49af423-655d-49cc-b771-5c647908c076) <br/><br/>

[목차로 이동하기](#목차)<br/><br/>

## 프로젝트 동작 시나리오

### 공통기능 (로그인, 회원가입)

**☞ 회원가입** <br/>
- 메인 페이지에서 해당되는 회원 유형의 페이지로 접속하여 회원가입을 진행 합니다.<br/><br/>
![image](https://github.com/user-attachments/assets/059a1b9f-c0fb-4cb3-8e4e-9138f1ba7e47)<br/><br/>

**☞ 로그인** <br/>
- 회원가입 후 해당되는 회원 유형의 페이지에서 접속할 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/d5278916-d342-4b47-9a8c-9cae0c89cbfa)

**☞ 업체 등록** <br/>
- 메뉴 주문을 하기 전 **"업체등록"** 을 먼저 진행 해야 합니다.<br/>
  업체 등록을 먼저 해보도록 하곘습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e05ca278-bc07-494e-a9c3-456174287227)

- 업체 등록이 완료되면 alert 창으로 **"등록이 요청 되었습니다"** 라는 문구가 출력 됩니다.<br/><br/>
![image](https://github.com/user-attachments/assets/399a0fe6-f328-436f-a825-fe276abce8e0)

**☞ 업체 승인** <br/>
- 이제 업체 등록이 되었다면 **"관리자"** 페이지에서 **"업체승인"** 을 받아야 합니다.<br/>
  관리자 페이지에서 **"업체 승인"** 을 해보도록 하겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e0a946fa-5c1d-4bef-bd45-6fb0afe3b94d)

- 업체 페이지 좌측 메뉴에 있는 **"업체 승인하기"** 페이지에서 **"승인"** 버튼을 누르면<br/>
  **"Approval Status"** 값은 1로	**"Action"** 값은 **"완료"** 로 변경되는 모습을 보실 수 있습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/19e24a8b-8a62-4eb0-820d-8576a70fd66a)

**☞ 메뉴 추가** <br/>
- 다음은 메뉴를 추가 해야 합니다.<br/>
**"꿔바로우, 마라탕, 탕후루"** 주문할 메뉴 3가지를 등록 해두겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/aaebf40f-8ec5-4a6f-b4c4-170151113acf)

- 다음은 User 메인 페이지로 이동하여 먹고 싶은 메뉴를 선택해서 접속 합니다.<br/><br/>
![image](https://github.com/user-attachments/assets/9020a43d-d8d4-419a-8788-d90963a5ca67)

- 저는 마라탕과 탕후루를 먹고 싶어서 "중식" 메뉴 페이지에 접속 해보도록 하겠습니다.<br/>
  현재 보이는 **"마라탕후루"** 라는 음식점에 있는 메뉴를 주문하기 위해 주문 가능한 페이지로 이동하겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/2a48e4aa-d2b4-4db6-b4af-f64672cd7d16)

**☞ 유저 페이지 (상세보기) : 메뉴 선택, 결제 페이지** <br/>
- 그 전에 먼저 간단히 소개를 드리자면 **"유저 페이지"** 상세보기 페이지에 접속한 화면 입니다.<br/>
  현재 페이지에서는 메뉴 선택 및 주문을 할 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/c0ddaea0-c1c6-4f18-a076-25801688d959)

**☞ 유저 페이지 (댓글 상세보기) : 유저의 입장에서 유저와 업체가 달아둔 **댓글, 대댓글** 을 확인할 수 있는 페이지**  <br/>
- 현재 페이지는 유저 입장에서 업체 회원과 주고 받은 댓글과 대댓글 목록이 조회되어 출력 되는 페이지 입니다.<br/>
  유저는 해당 탭에서 자신과 업체 회원이 대화를 나눈 기록을 언제든지 볼 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/01e4e0c3-f51f-46a0-b8b3-f3fe7b82b7c3)

**☞ 유저 페이지 (매장 소개) : 매장 위치 소개 페이지** <br/>
- 현재 페이지에서는 유저가 음식을 주문하고자 하는 매장의 위치를<br/>
  카카오맵 API를 활용하여 개발한 지도와 마커로 확인할 수 있도록 구현 하였습니다. <br/><br/>
![image](https://github.com/user-attachments/assets/2957d156-a2c8-4a15-921c-5ea112523252)

**☞ 유저 페이지 (검색 기능) : 현재 **운영중 or 운영종료** 된 음식점을 검색을 통해 확인할 수 있는 기능** <br/>
- 유저가 찾고자 하는 매장(음식점)을 검색을 통하여 찾을 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/d1b8e2b0-68d2-4192-bbae-dce573d75266)

**☞ 주문하기 & 결제하기** <br/>
- 현재 보이는 모습은 **"마라탕후루"** 라는 음식점에서 음식을 주문하는 화면 입니다.<br/>
  **마라탕, 탕후루, 꿔바로우** 3가지 음식을 주문 해보도록 하겠습니다.<br/>
  **"결제하기"** 버튼을 누르면 다음 결제창으로 이동하게 됩니다.<br/><br/>
![image](https://github.com/user-attachments/assets/d0b0a43e-f93b-42e6-8a3d-91d4eef0dc83)

- 다음으로, 결제창이 활성화가 되며, **"배달 정보"** 와 **"결제금액"** 이 표시됩니다.<br/>
  **"결제수단"** 을 선택하여 결제 하도록 구현 하였습니다.<br/><br/>
  현재 결제 수단은 **"포인트 결제 방식"** 으로 구현되어 있으며,<br/>
  추후에 PG사 결제 모듈을 연결해 볼 예정 입니다.<br/><br/>
![image](https://github.com/user-attachments/assets/0c8d4211-2656-4537-bd92-ad8bd42ec5ac)

**☞ 충전하기** <br/>
- 음식을 주문하기전, 먼저 저희 사이트 내에서 이용할 수 있는 **"충전금"** 을 먼저 충전 해줘야 합니다.<br/>
  충전하기 버튼을 눌러서 금액 충전을 먼저 진행해 보겠습니다.<br/>
  (금액은 최대 10억까지 충전 가능 합니다.)<br/><br/>
  
  **충전하기 전**
![image](https://github.com/user-attachments/assets/449db068-2241-4918-ba22-171cd06d825c)<br/><br/>

  **금액 충전 모달 창 활성화** <br/>
![image](https://github.com/user-attachments/assets/c2eab172-6c17-46e2-8e1d-e9965d111b76)<br/><br/>

  **충전 후**
![image](https://github.com/user-attachments/assets/292c1af6-8b5c-43bb-8e62-0f2506240f42)

- 그럼 이제 본격적으로 **"주문하기"** 버튼을 눌러 다시 주문을 해보도록 하겠습니다.<br/>
  버튼을 누르고 결제방식을 **"포인트 결제 방식"** 으로 선택하여 먹고 싶은 음식을 주문 합니다.<br/><br/>
![image](https://github.com/user-attachments/assets/691853f6-d509-4883-8d0d-f1373714d48a)

- 주문 성공이 되었다면, 이번엔 업체 페이지로 이동하여<br/>
  **"현재 주문 상태"** 페이지에 나타나는 주문 내역을 확인해보겠습니다.<br/><br/>
  
  **"현재 주문 상태"** 페이지에서 확인할 수 있는 내용은<br/>
  **메뉴명, 가격, 수량** 등을 확인하실 수 있으며, 업체 사장님들께서는<br/>
  **조리하기 또는 거절 버튼**을 눌러 주문을 수락하고 조리를 시작할 것인지<br/>
  거절할 것인지 선택하실 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e5f14a66-cedb-49d1-a30b-5bbf2583ec80)

**☞ 라이더 배정하기** <br/>
- 조리하기 버튼을 누르면 **라이더 배정하기** 라는 버튼이 활성화 됩니다.<br/>
  해당 버튼을 누르면 웹소켓으로 연결되어 있어 라이더 페이지에<br/>
  콜을 받는 페이지에서 들어오는 콜을 잡을 수가 있도록 구현되어 있습니다.<br/><br/>
  
![image](https://github.com/user-attachments/assets/4fbf1606-757a-40ef-9981-01b316982bd9)

- **라이더 배정하기** 버튼을 누른뒤 라이더 페이지에 콜이 들어온 모습 입니다.<br/><br/>
![image](https://github.com/user-attachments/assets/871948d8-73cd-49c2-9ad3-255bb5b72be4)

- 반대로, 거절하기를 누르면 유저 페이지<br/>
  주문 내역에 **"주문이 거절되었습니다"** <br/>
  라는 상태값이 반영 되도록 구현 하였습니다.<br/><br/>
  ![image](https://github.com/user-attachments/assets/71d1d5db-3bc1-4471-abb6-6d9326d89f1c)

**☞ 콜 받기** <br/>
- 다시 라이더페이지에 **콜받기** 페이지에서 **수락** 버튼을 누르면 배달이 등록되며,<br/>
  **"진행중인 배달 페이지"** 에 **"가게명, 가게와 주문자의 거리, 배달가격"** 등의 정보가 표시 됩니다.<br/><br/>
  현재 아래에 보이는 지도를 보시면 카카오맵 API를 활용하여 개발한 <br/>
  **"가게위치, 주문자의 위치, 라이더의 위치"** 를 표시하는 3가지의 마커가 표현 됩니다.<br/><br/>
![image](https://github.com/user-attachments/assets/6d1e5e54-05e8-48c9-bd67-c767035a83ce)

- 완료된 배달건은 라이더 페이지 **"배달 완료 내역 확인"** <br/>
  페이지에서 확인할 수 있습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/76a9047c-88f2-4b8f-b431-0a4e71e98f5e)

- 마찬가지로 업체 페이지에서도 **"주문 내역 확인"** <br/>
  페이지에서 주문 내역을 확인 할 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/d9c15f01-b524-4800-8c30-99a2f22c86bf)

- 관리자 페이지에서도 업체 페이지와 동일하게 **"주문 내역 확인"** <br/>
  이 가능 하도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e51e5b49-34ab-4f4a-b57a-dcc8a5b371e8)

**☞ Gemini AI & Weather API를 활용한 메뉴 추천 기능 (주문 내역 데이터 기반)** <br/>
- 다음은, 저희 팀의 **주요기능** 이라고 할 수 있는<br/>
  유저의 주문 내역 테이터를 기반으로 하는<br/>
  메뉴추천 기능 입니다.<br/><br/>
  아래 이미지는 Gemini AI API를 활용하여<br/>
  일반 유저 회원의 주문 내역 데이터를 기반으로 하여<br/>
  **"계절, 날씨, 기온"** 에 따라 AI가 자동으로<br/>
  메뉴를 추천해 줍니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e53d7e34-88f1-4ad0-936e-b0eba66c4659)

**☞ 유저의 입장에서 리뷰쓰기** <br/>
- 다음은 유저 페이지의 **리뷰작성** 기능을 소개 합니다.<br/><br/>
![image](https://github.com/user-attachments/assets/054419c6-cdcd-4898-ad85-fbe23a2cc382)

- 먼저, **리뷰작성** 입니다. <br/>
  아래 보이는것과 같이 **메뉴명, 수량, 가격** 등의 정보가 표시되며,<br/>
  원하는 대로 별점을 줄 수 있고, 리뷰 작성 후 등록이 가능 하도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/6ac2a490-75d7-4d3a-b46d-98a17751a11e)

- 유저가 자신이 작성한 리뷰를 관리하고 싶다면 유저 페이지에 **"리뷰관리"** <br/>
 탭을 클릭하여 접속하면 확인이 가능하며, **수정, 삭제** 기능이 있어,<br/>
 원하는 작업을 수행할 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/7f57780d-9e0d-4052-a9c6-0395df79a763)<br/>
![image](https://github.com/user-attachments/assets/9d6616fe-0480-4dc5-9e03-b3614000ecf9)

**☞ 업체 페이지 → 댓글관리** <br/>
- 유저가 작성한 댓글을 업체도 볼 수 있어야 답글을<br/>
  작성해 줄 수 있기 때문에 해당 부분을 생각하며 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/bd02f8a7-18fc-47b8-a439-948604fadae1)

**☞ 유저의 입장에서 악성 업체를 신고하기** <br/>
- 유저 입장에서 악성 업체를 신고해 보겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/383a4874-9a33-4d98-ba0d-a16c0d6ef030)

**☞ 업체(점주)의 입장에서 악성 유저를 신고하기** <br/>
- 이번엔 업체 입장에서 악성 유저를 신고해 보겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/b1bae858-7c5b-4671-a30f-db19c9bc7dbf)

**☞ 관리자 페이지 → 악성 (유저 & 업체) 차단하기** <br/>
- 악성 업체와 유저는 서로 각각 2회씩 신고를 받으면 관리자 페이지에서<br/>
  사이트 관리자가 차단을 할 수 있는 기능이 활성화 됩니다.<br/><br/>
  해당 기능은 저희 사이트에 주요 기능중 하나라고 할 수 있습니다.<br/>
  일반 유저만 악성 업체를 신고할 수 있는 것이 아닌 업체 회원도 악성 유저를<br/>
  신고할 수 있도록 구현 하였습니다.<br/><br/>
  
  이렇게 구현한 이유는 저희 사이트를 이용하는<br/>
  일반 소비자와 업체 회원들은 모두 저희의 **"소중한 고객"** <br/>
  이라는 신념을 갖고 있기 때문 입니다.</br></br>
  
  그 다음, 신고 횟수와 신고 내용을 볼 수 있도록 구현 하였으며,<br/>
  업체 내리기 버튼을 누르면 실제로 악성 유저나 업체로 신고 받은<br/>
  계정이 차단 되는 작업이 수행 됩니다.<br/><br/>
  ![image](https://github.com/user-attachments/assets/4aec7eac-05d3-41c8-8ca9-d50e177ce0dd)<br/>

  우선, 악성 업체부터 먼저 차단해 보도록 하겠습니다.<br/><br/>
  ![image](https://github.com/user-attachments/assets/c5d20ab8-9abd-4081-9162-352e4d7ca7d1)
  
  차단 후 다시 로그인을 해보면 아래 이미지와 같이 계정이 차단 되도록 구현 하였습니다.<br/><br/>
  ![image](https://github.com/user-attachments/assets/6bca8632-df11-46ca-aeaa-3ae2e6b802a8)

  악성 유저 차단도 악성 업체 차단과 동일하게 구현 하였습니다.<br/>
  우선 악성유저 신고내용 상세보기 입니다. <br/><br/>
  ![image](https://github.com/user-attachments/assets/db57cfc3-5c11-4f0e-b0e4-98bf896c2672)
  
  다음은 악성유저 차단하기 입니다.<br/><br/>
  ![image](https://github.com/user-attachments/assets/4bbc13e6-f086-4128-bb89-548f68569315)
  
  정상적으로 악성 유저의 계정도 차단된 모습 입니다.<br/><br/>
  ![image](https://github.com/user-attachments/assets/05bc0b29-62b0-4efb-960c-fdd683703dab)

**☞ (관리자 & 업체 & 라이더) 페이지 매출 내역 보기** <br/>
- 다음은, 업체 페이지의 일 단위 매출내역이 그래프로 표현되어 보여지도록 구현 하였습니다. <br/><br/>
  ![image](https://github.com/user-attachments/assets/3b9f6658-ec6e-4a14-9c76-47f58edcb282)

- 다음은, 관리자 페이지의 일 단위 매출내역이 그래프로 표현되어 보여지도록 구현 하였습니다. <br/><br/>
  ![image](https://github.com/user-attachments/assets/b19c4935-0dca-4ff3-aad0-c8b8c20956c1)

- 마지막으로, 라이더 페이지의 일 단위 매출내역이 그래프로 표현되어 보여지도록 구현 하였습니다. <br/><br/>
![image](https://github.com/user-attachments/assets/8f7c1ad0-ed54-4146-bd9d-71239c3902e0)

[목차로 이동하기](#목차)<br/><br/>

## 트러블 슈팅 경험
![image](https://github.com/user-attachments/assets/c553b647-9edd-46b9-b774-f9cdcad334e9) <br/><br/>
![image](https://github.com/user-attachments/assets/07ac7069-33a3-448f-90b3-b78ab0c00af1) <br/><br/>

[목차로 이동하기](#목차)<br/><br/>

## 프로젝트 회고
<details>
  <summary>상세보기</summary><br/>

- **소감** <br/><br/>
우리는 “문제를 해결하는 사람들” 답게 의사소통과 의사결정에 있어서<br/>
단, 하나의 소중한 의견들도 놓치지 않고 적극 반영할 수 있도록 노력을 하였고,<br/>
모두가 원했던 방향으로 100% 완벽하게 제작 하기는 어려웠지만, 함께 노력하고 달려온 결과<br/>
성공적으로 프로젝트를 완수할 수 있었습니다.
<br/><br/>
-**DeliveryOracle 일동**-
<br/><br/>

- **느낀점** <br/><br/>
처음 팀장이라는 중책을 맡게 되어 과연 잘 해낼 수 있을지에<br/>
대한 걱정들과 어떻게하면 팀 프로젝트를 성공적으로 이끌어 갈 수<br/>
있을것인지에 대한 수 없이 많은 생각들로 가득찬 한달을 보냈던것 같습니다.<br/><br/>
파이널 프로젝트를 진행하며 우여곡절도 많았고,<br/>
원활하지 못했던 의사소통 문제와 뜻이 맞지 않아 힘들때도 있었지만,<br/>
혼자가 아닌 팀원들과 함께 소통하며 최선을 다해 볼 수 있는 기회와 시간들이 있었기에<br/>
서로가 서로를 믿고 따르며 함께 성장할 수 있었던 프로젝트였다고 생각 합니다.<br/><br/>
처음이라 서투르고 많이 부족했을텐데 그래도 군말 없이<br/>
열심히 프로젝트에 임하며 성공적으로 완수 할 수 있도록<br/>
도움을 준 팀원 여러분께 감사 드립니다.<br/><br/>
-**황근호**- <br/><br/>

- **아쉬운점** <br/><br/>
결제 모듈을 붙여 보는 작업과, AWS를 활용하여 사이트 배포하기 까지가<br/>
원래 계획이었으나 주어진 시간안에 다 해내지 못한것이 큰 아쉬움으로 남습니다.<br/><br/>
원래는 5명으로 팀을 구성하게 되었고, 기획부터 시작하고 어느정도 틀이 잡히면<br/>
작업을 시작하려고 했었으나, 두명의 팀원이 갑작스러운 중도 포기로 교육과정을 그만두는<br/>
상황이 생겼습니다.<br/><br/>
그래서 남은 인원 3명으로 급히 포지션 변경과 기획을 다시 수정 하고 진행 하느라<br/>
주어진 시간이 많이 지체 되었고, 프론트엔드 부분을 깔끔하고 예쁘게 만들어 내지 못한것 같아<br/>
아쉬움이 크게 남습니다.<br/><br/>
그래도 포기하지 않고, 꾸준히 지속적인 학습을 이어가며 시간안에 못했던 부분들을 하나씩 추가 해보고<br/>
코드와 성능 개선도 해보려고 합니다. 작업을 혼자하기 때문에 시간은 좀 걸릴것으로 예상 되지만 그래도 열심히<br/>
파이팅 있게 해보도록 하겠습니다!!!<br/><br/>
부족하고, 긴 글이지만 읽어주신 여러분들께 진심으로 감사드립니다!<br/><br/>
-**itrecipe**-
</details>

<br/><br/>
[목차로 이동하기](#목차)
