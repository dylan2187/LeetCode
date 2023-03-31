import os

import openai

os.environ["http_proxy"] = "http://127.0.0.1:7890"
os.environ["https_proxy"] = "http://127.0.0.1:7890"
os.environ["all_proxy"] = "socks5://127.0.0.1:7890"


openai.api_key = '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'
# api的密钥自行申请
# proxies = {'http': "http://127.0.0.1:7890",
#            'https': "http://127.0.0.1:7890"}
# openai.proxy = proxies
# Note: you need to be using OpenAI Python v0.27.0 for the code below to work

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant",
            "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
)

print(response)
