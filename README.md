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
  <summary>Click Here!! ☞ 테이블 Entity 상세 설명</summary>
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

# UseCase
![DeliveryOracle_UseCase drawio](https://github.com/user-attachments/assets/9013e409-9b7f-46ba-bc21-3d35c740edc5)

# Jira를 활용한 일정관리
![image](https://github.com/user-attachments/assets/1e17488e-dea1-4caf-9eb1-80a834bddb6f)

# API 명세서
- POSTMAN API 명세서 페이지 바로가기  Click Here!! ↓↓↓<br/>
<a>https://documenter.getpostman.com/view/35282954/2sAXjDevm5<a/>
<!--
![사용자신고, 유저등록, Login - API](https://github.com/user-attachments/assets/28789e1b-a1d0-44c8-a552-5d772fb6ddce)
![라이더 페이지, 계좌정보 - API](https://github.com/user-attachments/assets/677b5eac-b488-43eb-8b20-c38a96eee4de)
![제미나이(구글 API), 댓글 컨트롤러 - API](https://github.com/user-attachments/assets/03eaf44b-d3bd-435b-be7b-a8282abee98b)
![업체 페이지 - API](https://github.com/user-attachments/assets/6158157f-6afe-4c4d-aeb6-d3b8881ad6b8)
![업체 페이지 (1) - API](https://github.com/user-attachments/assets/c7455b7f-4092-4d55-8f84-0b60d266bbc9)
![관리자 페이지, 유저 정보 수정 - API](https://github.com/user-attachments/assets/41444257-5a3e-49da-bd0e-85f92302a925)
![조회 - API](https://github.com/user-attachments/assets/0c1b6f5c-1ea7-4c35-a373-fa75b60d24d0)
![카카오 로그인 - API](https://github.com/user-attachments/assets/d59a23ed-dafc-44a9-8c01-256bfa788ec9)
-->

# 소감 및 느낀점
우리는 “문제를 해결하는 사람들” 답게 의사소통과 의사결정에 있어서<br/>
단, 하나의 소중한 의견들도 놓치지 않고 적극 반영할 수 있도록 노력을 하였고,<br/>
모두가 원했던 방향으로 100% 완벽하게 이룰순 없었으나 함께 노력하고 달려온 결과<br/>
성공적으로 프로젝트를 완수할 수 있었습니다.
<br/><br/>
-DeliveryOracle 일동-
<br/><br/>
처음 팀장이라는 중책을 맡게 되어 과연 잘 해낼 수 있을지에 대한 걱정들과<br/>
어떻게하면 팀 프로젝트를 성공적으로 이끌어갈 수 있을것인지에 대한 수 없이 많은<br/>
생각들로 가득찬 한달을 보냈던것 같습니다.<br/><br/>
파이널 프로젝트를 진행하며 우여곡절도 많았고,<br/>
매번 어려운 순간들이 찾아와 힘들떄도 있었지만,<br/>
혼자가 아닌 팀원들과 함께 최선을 다해볼 수 있는 시간들이 있었고,<br/>
그 과정에서 서로가 서로를 믿고 따라주었기에 같이 성장할 수 있게 된<br/>
프로젝트였던것 같습니다.<br/><br/>
처음이라 서투르고 많이 부족헀을텐대 그래도 군말 없이<br/>
열심히 프로젝트에 임하여 성공적으로 완수 할 수 있도록<br/>
도움을 준 팀원 여러분께 감사 드립니다.<br/><br/>
-황근호-



