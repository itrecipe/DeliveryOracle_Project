### 개발기간 : 24.06.18 ~ 24.07.18

# 프로젝트명 :  DeliveryOracle
![image](https://github.com/user-attachments/assets/a4dd9696-fd30-4620-8759-0647a448d89c)

# 팀구성 & 담당업무
![image](https://github.com/user-attachments/assets/a62edc30-bf91-4e27-80da-ccbc74ad5d50)<br/><br/>
![image](https://github.com/user-attachments/assets/8941ea07-81f0-4132-8beb-ec719cbcd2bb)<br/><br/>
![image](https://github.com/user-attachments/assets/272530e4-3e06-46b8-a3a5-db3d1c4fb19d)<br/><br/>

# 프로젝트 소개
![image](https://github.com/user-attachments/assets/a0fae65e-9acd-42d7-be70-4d988d597ef4)

# 개발환경 (기술스택)
![image](https://github.com/user-attachments/assets/ecc1072d-6ee9-4f46-b686-919eea7e0da6)

# ERD
![DeliveryOracle_ERD](https://github.com/user-attachments/assets/5efc7279-a238-4d75-bc04-8155d1fbc517)
총 14개의 테이블을 제작 하였습니다.

<details>
  <summary>테이블 Entity 상세보기 ☞ Click Here!!</summary>
<br/>
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
- User, Store, Admin, Rider 순으로 4가지 회원 유형의 UseCase를 작성 하였습니다.
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

# 실행화면 & 주요기능 소개
0. DeliveryOracle 메인 페이지.<br/>
- 4가지 회원 유형별로 접속할 수 있도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/8bc1bc42-6301-45eb-9fae-f9fdf9e397c9)
<br/><br/>

1. User 메인 페이지 <br/>
- 먹고 싶은 메뉴를 선택하여 접속 가능 하도록 구현 하였습니다.<br/><br/>
![image](https://github.com/user-attachments/assets/9020a43d-d8d4-419a-8788-d90963a5ca67)

2. Store 메인 페이지 <br/><br/>
![image](https://github.com/user-attachments/assets/4c66275d-141c-4a20-8aeb-9673f1c5311f)

3. Admin 메인 페이지 <br/><br/>
![image](https://github.com/user-attachments/assets/88bb835e-d355-4a28-89ca-940eaaf2b4ce)

4. Rider 메인 페이지 <br/><br/>
![image](https://github.com/user-attachments/assets/b49af423-655d-49cc-b771-5c647908c076)

☆ 공통기능
- 로그인 <br/><br/>
![image](https://github.com/user-attachments/assets/c15dff46-44fc-4459-8496-a2398700c910)

- 회원가입 <br/><br/>
![image](https://github.com/user-attachments/assets/0ffc9e4e-4711-45c6-baf4-5be373d72906)



# 소감 및 느낀점
우리는 “문제를 해결하는 사람들” 답게 의사소통과 의사결정에 있어서<br/>
단, 하나의 소중한 의견들도 놓치지 않고 적극 반영할 수 있도록 노력을 하였고,<br/>
모두가 원했던 방향으로 100% 완벽하게 제작할 수는 없었으나 함께 노력하고 달려온 결과<br/>
성공적으로 프로젝트를 완수할 수 있었습니다.
<br/><br/>
-DeliveryOracle 일동-
<br/><br/>
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
