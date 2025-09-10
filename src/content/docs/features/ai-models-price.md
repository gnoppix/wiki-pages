---
title: Gnoppix AI Models Pricing
description: Gnoppix AI Model Pricing 
---

#### During the alpha-testing all models are free to use remember the limitation with 20 queries / minute and 1000 queries a day


During our test, we'll highlight our top 10 modules. Of course, there are many more. Send us a message, and we'll be happy to add your module. You can find a list of all modules [here](https://media.gnoppix.org/gnoppix_ai_models_all.ods).

#### Model describtions

- GPT-5 (OpenAI): This is OpenAI's latest flagship model, known for its multimodal capabilities (handling text, audio, and image input/output in real-time) and impressive speed. It's designed for highly interactive applications.

- Claude 4 Sonnet / Opus (Anthropic): Anthropic's Claude series, especially the Opus variant, is highly regarded for its strong reasoning abilities, long context windows, and focus on safety and ethical AI. Sonnet offers a good balance of speed and performance.

- Gemini 2.5 Pro (Google DeepMind): Google's Gemini models are powerful, multimodal, and excel in complex reasoning tasks, coding, and long-form understanding. Gemini 2.5 Pro is particularly strong for deep research and handling large input content.

- Llama 4 (Meta AI): Meta continues to lead in the open-source LLM space with its Llama series. Llama 3.1 is highly capable, offers strong multilingual performance, and is widely accessible for developers to fine-tune and use locally.

- DeepSeek R1 (DeepSeek): DeepSeek has gained significant attention for its cost-efficient and performant reasoning LLMs. DeepSeek R1, an open-source model, has shown competitive performance on reasoning benchmarks, particularly in structured thinking.

- Mistral (Mistral AI): Mistral AI is a prominent European player in the LLM space, known for efficient and powerful models. Mistral Large 2, Medium 3 offers cutting-edge performance in coding, problem-solving, and analytical tasks, and is often a go-to for self-hosted deployments.

- Qwen 3 (Alibaba): Alibaba's Qwen series is a strong contender, particularly for its advancements in the Asian market. Qwen 3 (and its variations) offers high expertise in mathematical problems, logical reasoning, and often includes multimodal capabilities.

- Grok 4 Grok 4 is xAI's latest reasoning model with a 256k context window. It supports parallel tool calling, structured outputs, and both image and text inputs. Note that reasoning is not exposed, reasoning cannot be disabled, and the reasoning effort cannot be specified. Pricing increases once the total tokens in a given request is greater than 128k tokens. 


#### Current Free Models 

As an part of the Gnoppix Membership, you can use those models (with the 1000 query limit a day) for free .


openrouter/google/gemma-3-27b-it:free

openrouter/google/gemini-2.0-flash-exp:free

openrouter/qwen/qwen2.5-vl-72b-instruct:free

openrouter/qwen/qwen2.5-vl-32b-instruct:free

openrouter/openai/gpt-oss-20b:free

openrouter/qwen/qwen3-coder:free

openrouter/google/gemini-2.5-flash-image-preview:free

gemini/gemini-2.5-flash-lite

gemini/gemini-2.5-flash

gemini/gemini-2.0-flash-lite

deepseek/deepseek-r1-0528:free

deepseek/deepseek-chat-v3.1:free

gpt-5-nano

openrouter/mistralai/mistral-7b-instruct:free




# Large Language Model (LLM) Performance Comparison

This document provides a comparative overview of various leading Large Language Models (LLMs) from top providers, detailing their context window, maximum output, pricing, latency, and throughput. Please note that pricing and performance metrics can fluctuate as models are updated.

---

## OpenAI

| Model             | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-------------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| GPT-4o-mini       | 128K             | 16K                 | $0.15                      | $0.60                       | 0.34        | 80.22                 |
| GPT-4.1           | 1.05M            | 33K                 | $2                         | $8                          | 0.47        | 75.20                 |
| GPT-5		    | 128K             | 16K                 | $1.25                      | $10                         | 0.52        | 52.21                 |
| GPT-5-mini        | 400k 	       | 128k		     | $0.25 			  | $2				| 0.45	      | 55.19		      |
| GPT-5-nano	    | 400k	       | 128k		     | $0.05			  | $0.40			| 0.65	      | 65.72		      |
  	
---

## Anthropic

| Model             | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-------------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| Claude Sonnet 4   | 200K             | 64K                 | $3                         | $15                         | 2.08        | 65.95                 |
| Claude Opus 4     | 200K             | 32K                 | $15                        | $75                         | 2.73        | 40.54                 |

---

## Google

| Model             | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-------------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| Gemini 2.5 Pro    | 1.05M            | 66K                 | $1.25 to $2.50             | $10 to $15                  | 2.39        | 85.70                 |
| Gemini 2.5 Flash  | 1.05M            | 66K                 | $0.30                      | $2.50                       | 0.72        | 40.01                 |

---

## Meta

| Model                   | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-------------------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| Llama 3.3 70B Instruct  | 131K             | 8K                  | $0.039 (-70%)              | $0.12 (-70%)                | 0.98        | 52.63                 |
| Llama 4 Maverick        | 1.05M            | 16K                 | $0.15                      | $0.60                       | 0.30        | 97.70                 |
| Llama 3.1 70B Instruct  | 131K             | 16K                 | $0.10                      | $0.28                       | 0.27        | 35.59                 |
| Llama 3.1 8B Instruct   | 131K             | 131K                | $0.016                     | $0.02                       | 0.26        | 208.3                 |

---

## DeepSeek

| Model           | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-----------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| DeepSeek V3 0324| 164K             | 164K                | $0.28                      | $0.88                       | 0.39        | 17.34                 |
| R1              | 164K             | 164K                | $0.45                      | $2.15                       | 0.56        | 88.16                 |

---

## Mistral

| Model                 | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-----------------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| Mistral Large         | 128K             | 128K                | $2                         | $6                          | 0.32        | 88.74                 |
| Mistral Small 3.2 24B | 128K             | 128K                | $0.05                      | $0.10                       | 1.10        | 31.78                 |

---

## Qwen

| Model                       | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-----------------------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| Qwen3 235B A22B             | 41K              | 41K                 | $0.13                      | $0.60                       | 1.14        | 14.71                 |
| Qwen2.5 72B Instruct        | 33K              | 16K                 | $0.12                      | $0.39                       | 0.54        | 41.33                 |
| Qwen2.5 Coder 32B Instruct  | 33K              | 16K                 | $0.06                      | $0.15                       | 0.63        | 55.72                 |


## xAI  

| Model                       | Context (Tokens) | Max Output (Tokens) | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Latency (s) | Throughput (Tokens/s) |
|-----------------------------|------------------|---------------------|----------------------------|-----------------------------|-------------|-----------------------|
| Grok 4                      | 256K             | 256K                | $3                         | $15                         | 2.56        | 34.21                 |
| Grok 3 Mini Beta            | 131K             | 131K                | $0.30                      | $0.50                       | 0.32        | 131.28                |
| Grok 3	              | 131K          	 | 131K                | $3                         | $15                         | 0.82        | 49.78                 |



