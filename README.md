### 개발기간 : 24.06.18 ~ 24.07.18

# 프로젝트명 :  DeliveryOracle
![image](https://github.com/user-attachments/assets/a4dd9696-fd30-4620-8759-0647a448d89c)

# 팀구성 & 담당업무
![image](https://github.com/user-attachments/assets/a62edc30-bf91-4e27-80da-ccbc74ad5d50)<br/><br/>
![image](https://github.com/user-attachments/assets/8941ea07-81f0-4132-8beb-ec719cbcd2bb)<br/><br/>
![image](https://github.com/user-attachments/assets/272530e4-3e06-46b8-a3a5-db3d1c4fb19d)<br/><br/>

# 프로젝트 소개
![image](https://github.com/user-attachments/assets/a0fae65e-9acd-42d7-be70-4d988d597ef4)<br/><br/>

# 개발환경 (기술 스택)
![image](https://github.com/user-attachments/assets/b2b1c8ad-9c55-4ddf-bf11-7ee97ae9c622)<br/><br/>

# ERD
![DeliveryOracle_ERD](https://github.com/user-attachments/assets/5efc7279-a238-4d75-bc04-8155d1fbc517)<br/><br/>
총 14개의 테이블을 제작 하였습니다.

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

6. RiderDelivery (라이더 배달 테이블)

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

# UseCase
![DeliveryOracle_UseCase drawio](https://github.com/user-attachments/assets/9013e409-9b7f-46ba-bc21-3d35c740edc5)
- **User, Store, Admin, Rider** 순으로 **4가지** 회원 유형의 **UseCase** 를 작성 하였습니다.
<br/><br/>

# Jira를 활용한 일정관리
![image](https://github.com/user-attachments/assets/1e17488e-dea1-4caf-9eb1-80a834bddb6f)
- 색상별로 담당자를 배정하였고, 각자가 맡은 파트별로 나누었습니다.<br/><br/>
- 각자가 맡은 기능이 구현이 되었는지 진행중인지 아직 시작 전인지를 진행 상황을 파악하기 위해 팀원들과<br/>
  사전에 미리 약속하여 진행중이면 "진행중" 완료 되었으면 "완료" 상태 값을 찍어 놓기로 약속한 후 진행 하였습니다.<br/><br/>
- 기능 구현을 해야하는 일정이 되었음에도 불구하고 상태값이 아무것도 없다면 아직 작업이<br/>
  시작되지 않은 것으로 판단되며, 자신이 담당하고 있는 파트가 아니더라도<br/>
  소통을 통하여 시간적 여유가 있는 사람이 도와주는 방식으로 작업을 진행 하였습니다.
<br/><br/>

# API 명세서
- POSTMAN을 활용하여 작성한 API 명세서 링크 ☞ Click Here!! ↓↓↓<br/>
<a>https://documenter.getpostman.com/view/35282954/2sAXjDevm5<a/>
<br/><br/>

# 페이지 소개

**DeliveryOracle 메인 페이지**<br/> 
- 4가지 회원 유형별로 접속할 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/8bc1bc42-6301-45eb-9fae-f9fdf9e397c9)
<br/><br/>

## 1. USER PART
**User 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/9020a43d-d8d4-419a-8788-d90963a5ca67)

## 2. STORE PART
**Store 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/4c66275d-141c-4a20-8aeb-9673f1c5311f)

## 3. ADMIN PART
**Admin 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/88bb835e-d355-4a28-89ca-940eaaf2b4ce)

## 4. RIDER PART
**Rider 메인 페이지** <br/><br/>
![image](https://github.com/user-attachments/assets/b49af423-655d-49cc-b771-5c647908c076)

# 프로젝트 동작 시나리오 & 기능 소개

### 공통기능 (로그인, 회원가입)

☞ 회원가입 <br/>
- 메인 페이지에서 해당되는 회원 유형의 페이지로 접속하여 회원가입을 진행 합니다.<br/><br/>
![image](https://github.com/user-attachments/assets/0ffc9e4e-4711-45c6-baf4-5be373d72906)
<br/><br/>

☞ 로그인 <br/>
- 회원가입 후 해당되는 회원 유형의 페이지에서 접속할 수 있도록 구현 되었습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/c15dff46-44fc-4459-8496-a2398700c910)

☞ 업체 등록 <br/>
- 메뉴 주문을 하기 전 **"업체등록"** 을 먼저 진행 해야 합니다.<br/>
  업체 등록을 먼저 해보도록 하곘습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e05ca278-bc07-494e-a9c3-456174287227)

- 업체 등록이 완료되면 alert 창으로 **"등록이 요청 되었습니다"** 라는 문구가 출력 됩니다.<br/><br/>
![image](https://github.com/user-attachments/assets/399a0fe6-f328-436f-a825-fe276abce8e0)

☞ 업체 승인 <br/>
- 이제 업체 등록이 되었다면 **"관리자"** 페이지에서 **"업체승인"** 을 받아야 합니다.<br/>
  관리자 페이지에서 **"업체 승인"** 을 해보도록 하겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e0a946fa-5c1d-4bef-bd45-6fb0afe3b94d)

- 업체 페이지 좌측 메뉴에 있는 **"업체 승인하기"** 페이지에서 **"승인"** 버튼을 누르면<br/>
  **"Approval Status"** 값은 1로	**"Action"** 값은 **"완료"** 로 변경되는 모습을 보실 수 있습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/19e24a8b-8a62-4eb0-820d-8576a70fd66a)

☞ 메뉴 추가 <br/>
- 다음은 메뉴를 추가 해야 합니다.<br/>
**"꿔바로우, 마라탕, 탕후루"** 주문할 메뉴 3가지를 등록 해두겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/aaebf40f-8ec5-4a6f-b4c4-170151113acf)

- 다음은 User 메인 페이지로 이동하여 먹고 싶은 메뉴를 선택해서 접속 합니다.<br/><br/>
![image](https://github.com/user-attachments/assets/9020a43d-d8d4-419a-8788-d90963a5ca67)

- 저는 마라탕과 탕후루를 먹고 싶어서 "중식" 메뉴 페이지에 접속 해보도록 하겠습니다.<br/>
  현재 보이는 **"마라탕후루"** 라는 음식점에 있는 메뉴를 주문하기 위해 주문 가능한 페이지로 이동하겠습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/2a48e4aa-d2b4-4db6-b4af-f64672cd7d16)

☞ 주문하기 & 결제하기 <br/>
- 현재 보이는 모습은 **"마라탕후루"** 라는 음식점에서 음식을 주문하는 화면 입니다.<br/>
  **마라탕, 탕후루, 꿔바로우** 3가지 음식을 주문 해보도록 하겠습니다.<br/>
  **"결제하기"** 버튼을 누르면 다음 결제창으로 이동하게 됩니다.<br/><br/>
![image](https://github.com/user-attachments/assets/0f6a7b6d-905a-426e-8e11-0088de276768)

- 다음으로, 결제창이 활성화가 되며, **"배달 정보"** 와 **"결제금액"** 이 표시됩니다.<br/>
  **"결제수단"** 을 선택하여 결제 하도록 구현 되었습니다.<br/><br/>
  현재 결제 수단은 **"포인트 결제 방식"** 으로 구현되어 있으며,<br/>
  추후에 PG사 결제 모듈을 연결해 볼 예정 입니다.<br/><br/>
![image](https://github.com/user-attachments/assets/c8f3f7fa-bfe6-4520-b2a6-47fb25f8cc14)

☞ 충전하기 <br/>
- 음식을 주문하기전, 먼저 저희 사이트 내에서 이용할 수 있는 **"충전금"** 을 먼저 충전 해줘야 합니다.<br/>
  충전하기 버튼을 눌러서 금액 충전을 먼저 진행해 보겠습니다.<br/>
  (금액은 최대 10억까지 충전 가능 합니다.)<br/><br/>
  
  **충전하기 전**
![image](https://github.com/user-attachments/assets/89a03ce9-5491-4f8e-95a7-be13b0b315fe)<br/><br/>

  **금액 충전 모달 창 활성화** <br/>
![image](https://github.com/user-attachments/assets/c2eab172-6c17-46e2-8e1d-e9965d111b76)<br/><br/>

  **충전 후**
![image](https://github.com/user-attachments/assets/3608f17e-9c98-4b10-821f-571b2b20be56)

- 그럼 이제 본격적으로 **"주문하기"** 버튼을 눌러 다시 주문을 해보도록 하겠습니다.<br/>
  버튼을 누르고 결제방식을 **"포인트 결제 방식"** 으로 선택하여 먹고 싶은 음식을 주문 합니다.<br/><br/>
![image](https://github.com/user-attachments/assets/c28d1a90-051d-4298-9dbc-65c58811e24b)

- 주문 성공이 되었다면, 이번엔 업체 페이지로 이동하여 **"현재 주문 상태"** 페이지에 나타나는 주문내역을 확인해보겠습니다.<br/>
  **"현재 주문 상태"** 페이지에서 확인할 수 있는 내용은 **메뉴명, 가격, 수량** 등을 확인할 수 있으며, 업체 사장님들께서는 <br/>
조리하기 또는 거절 버튼을 눌러 주문을 수락하고. 조리를 시작할껀지 거절할껀지 선택할 수 있도록 구현 되었습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/e5f14a66-cedb-49d1-a30b-5bbf2583ec80)

**조리하기 버튼을 누른 경우**
- **라이더 배정하기** 라는 버튼이 활성화 됩니다.<br/>
  해당 버튼을 누르면 웹소켓으로 연결되어 있어 라이더 페이지에<br/>
  콜을 받는 페이지에서 들어오는 콜을 잡을 수가 있도록 구현되어 있습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/4fbf1606-757a-40ef-9981-01b316982bd9)


=================================================
현재 여기까지 작성... 다음날 이어서 다시 작성하기
=================================================

# 프로젝트 회고 (소감, 느낀점, 아쉬운점)
- **소감** <br/><br/>
우리는 “문제를 해결하는 사람들” 답게 의사소통과 의사결정에 있어서<br/>
단, 하나의 소중한 의견들도 놓치지 않고 적극 반영할 수 있도록 노력을 하였고,<br/>
모두가 원했던 방향으로 100% 완벽하게 제작 하기는 어려웠지만, 함께 노력하고 달려온 결과<br/>
성공적으로 프로젝트를 완수할 수 있었습니다.
<br/><br/>
-DeliveryOracle 일동-
<br/><br/>

- **느낀점** <br/><br/>
처음 팀장이라는 중책을 맡게 되어 과연 잘 해낼 수 있을지에 대한 걱정들과<br/>
어떻게하면 팀 프로젝트를 성공적으로 이끌어갈 수 있을것인지에 대한 수 없이 많은<br/>
생각들로 가득찬 한달을 보냈던것 같습니다.<br/><br/>
파이널 프로젝트를 진행하며 우여곡절도 많았고,<br/>
원할하지 못했던 의사소통 문제와 뜻이 맞지 않을때도 있었지만,<br/>
혼자가 아닌 팀원들과 함께 소통하며 최선을 다해 볼 수 있는 기회와 시간들이 있었고<br/>
그 과정에서 서로가 서로를 믿고 따라 주었기에 같이 성장할 수 있게 된<br/>
프로젝트였다고 생각 합니다.<br/><br/>
처음이라 서투르고 많이 부족헀을텐대 그래도 군말 없이<br/>
열심히 프로젝트에 임하며 성공적으로 완수 할 수 있도록<br/>
도움을 준 팀원 여러분께 감사 드립니다.<br/><br/>
-팀장 황근호-

- **아쉬운점** <br/><br/>

