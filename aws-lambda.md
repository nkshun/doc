
#### lambdaからlambdaの呼び出し 
```
lambda_client = boto3.client('lambda')
response = lambda_client.invoke(
  FunctionName='lambdaの名前',
  InvocationType='RequestResponse',
  Payload=json.dumps(payload)
）
res_payload = response['Payload'].read()
res_payload = json.loads(res_payload.decode('utf-8'))
```
